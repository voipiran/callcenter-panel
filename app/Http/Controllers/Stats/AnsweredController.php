<?php

namespace App\Http\Controllers\Stats;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Queues;
use App\Agent;
use App\CdrForGetVoice;
use DB;
use App\Helpers;


class AnsweredController extends Controller
{
	/** action  */
	public function actions(Request $request)
	{

		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('stats.answered')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		$method = $request->method;

		switch ($method) {
			case 'getVoice':
				$res  = $this->getVoice($request);
				break;
			case 'Answered_getData':
				$res  = $this->Answered_getData($request);
				break;
			case 'Answered_getAnsweredCallsDetail':
				$res  = $this->Answered_getAnsweredCallsDetail($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}
	/** get file-name voice via callid and download voice */
	public function getVoice($request)
	{
		try {
			$file = CdrForGetVoice::where('uniqueid', $request->callid)->first(['recordingfile']);
			$file = $file->recordingfile;
			if (!$file)
				$file = 'empty';
			return [
				'status' => 200,
				'file' => $file,
				'callid' => $request->callid
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	public function Answered_getData($request)
	{
		try {
			/** start detals answered (تماس های پاسخ داده شده)*/
			$details = $this->getDetail($request);

			/** تماس های پاسخ داده شده توسط اپراتور */
			$answered = $this->listOfAgents($request);

			/** سطح سرویس  */
			$service = $this->getLevelService($request);

			// <!-- تماس های پاسخ داده شده توسط صف -->
			$qAnswered = $this->getQueueAnswered($request);

			// دلیل قطع شدن مکالمه
			$hangUp = $this->getHangUpState($request);

			/** ---  تماس های پاسخ داده شده بر اساس مدت مکالمه Start -------------- */
			$answeredByCallLength = $this->GetAnsweredByCallLength($request);

			/** تماس های منتقل شده */
			$answeredTransfer = $this->getAnsweredTransfer($request);

			$timeFilter = calcTime($request);

			return [
				'status' => 200,
				'message' => 'success',
				'answered' => $answered,
				'details' => $details,
				'service' => $service,
				'hangUp' => $hangUp,
				'qAnswered' => $qAnswered,
				'answeredByCallLength' => $answeredByCallLength,
				'answeredTransfer' => $answeredTransfer,
				'timeFilter' => $timeFilter
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** get lisrt agent and detail answered for fill table تماس های پاسخ داده شده توسط اپراتور in answered component */
	public function listOfAgents($request)
	{
		try {
			$answered = DB::connection('mysql')->table('queue_stats')
				->select('queuename', 'agent', DB::raw('COUNT(agent) as count'), DB::raw('SUM(data2) as time'), DB::raw('SUM(data1) as delay'), DB::raw('MAX(time) as lastCall'))
				->groupBy('agent')
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues)
				/** 7 and 8 is event answered */
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$answered = $answered->whereBetween('time', $time);
			}

			return $answered->get();
		} catch (\Throwable $th) {
			return [];
		}
	}
	/** get detail for fit row one in component answered */
	public function getDetail($request)
	{
		try {
			$detail = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(agent) as count'), DB::raw('SUM(data2) as time'), DB::raw('SUM(data1) as delay'))
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues)
				/** 7 and 8 is event answered */
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);


			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$detail = $detail->whereBetween('time', $time);
			}

			return $detail->get();
		} catch (\Throwable $th) {
			return [];
		}
	}
	/** سطح سرویس Start -------------- */
	public function getLevelService($request)
	{
		try {
			return [
				['count' => intval($this->getCalculation($request, 0, 15)[0]->count), 'lable' => '15 '],
				['count' => intval($this->getCalculation($request, 16, 30)[0]->count), 'lable' => '30 '],
				['count' => intval($this->getCalculation($request, 31, 45)[0]->count), 'lable' => '45 '],
				['count' => intval($this->getCalculation($request, 46, 60)[0]->count), 'lable' => '60 '],
				['count' => intval($this->getCalculation($request, 61, 75)[0]->count), 'lable' => '75 '],
				['count' => intval($this->getCalculation($request, 76, 90)[0]->count), 'lable' => '90 '],
				['count' => intval($this->getCalculation($request, 90, null, 'where')[0]->count), 'lable' => '+95 ']
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	/**get Level Service for  سطح سرویس 
	 * @param1 $request is $_REQUEST
	 * @param2 is num min
	 * @param3 is num max
	 * @param4 is enum [where or whereBetween] 
	 */
	public function getCalculation($request, $param1, $param2, $type = 'whereBetween')
	{
		$service = DB::connection('mysql')->table('queue_stats')
			->select(DB::raw('COUNT(agent) as count'))
			->whereIn('agent', $request->agents)
			->whereIn('queuename', $request->queues)
			/** 7 and 8 is event answered */
			->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);


		/** get by date time */
		if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
			$time = calcTime($request);
			$service = $service->whereBetween('time', $time);
		}


		if ($type == 'where')
			return $service->where('data1', '>', $param1)->get();


		return $service->whereBetween('data1', [$param1, $param2])->get();
	}
	/** سطح سرویس End -------------- */

	// <!-- تماس های پاسخ داده شده توسط صف -->
	public function getQueueAnswered($request)
	{
		try {
			$qAnswered = DB::connection('mysql')->table('queue_stats')
				->select('queuename as lable', DB::raw('COUNT(data2) as count'))
				->groupBy('queuename')
				->whereIn('queuename', $request->queues)
				->whereIn('agent', $request->agents)
				/** 7 and 8 is event answered */
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$qAnswered = $qAnswered->whereBetween('time', $time);
			}

			return $qAnswered->get();
		} catch (\Throwable $th) {
			return [];
		}
	}
	// دلیل قطع شدن مکالمه
	public function getHangUpState($request)
	{
		try {
			/** hang uo by AGENT */
			$hangUpAgent = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(data2) as count'))
				->whereIn('queuename', $request->queues)
				->whereIn('agent', $request->agents)
				/** 7 and 8 is event answered */
				->where('event', 'COMPLETEAGENT');

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$hangUpAgent = $hangUpAgent->whereBetween('time', $time);
			}

			/** hang uo by customer */
			$hangUpCaller = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(data2) as count'))
				->whereIn('queuename', $request->queues)
				->whereIn('agent', $request->agents)
				/** 7 and 8 is event answered */
				->where('event', 'COMPLETECALLER');

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$hangUpCaller = $hangUpCaller->whereBetween('time', $time);
			}

			$agent = $hangUpAgent->first();
			$caller = $hangUpCaller->first();

			return [
				['lable' => 'agent', 'count' => $agent->count],
				['lable' => 'caller', 'count' => $caller->count],
			];
		} catch (\Throwable $th) {
			return [];
		}
	}

	/** ---  تماس های پاسخ داده شده بر اساس مدت مکالمه Start -------------- */
	public function GetAnsweredByCallLength($request)
	{
		try {
			return [
				['data' => $this->getCalculationAnsweredByCallLength($request, 0, 15), 'lable' => 15],
				['data' => $this->getCalculationAnsweredByCallLength($request, 16, 30), 'lable' => 30],
				['data' => $this->getCalculationAnsweredByCallLength($request, 31, 45), 'lable' => 45],
				['data' => $this->getCalculationAnsweredByCallLength($request, 46, 60), 'lable' => 60],
				['data' => $this->getCalculationAnsweredByCallLength($request, 61, 75), 'lable' => 75],
				['data' => $this->getCalculationAnsweredByCallLength($request, 76, 90), 'lable' => 90],
				['data' => $this->getCalculationAnsweredByCallLength($request, 91, 120), 'lable' => 120],
				['data' => $this->getCalculationAnsweredByCallLength($request, 121, 135), 'lable' => 135],
				['data' => $this->getCalculationAnsweredByCallLength($request, 135, null), 'lable' => '135 +']
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	/**get Level Service for  سطح سرویس 
	 * @param1 $request is $_REQUEST
	 * @param2 is num min
	 * @param3 is num max
	 * @param4 is enum [where or whereBetween] 
	 */
	public function getCalculationAnsweredByCallLength($request, $param1, $param2, $type = 'whereBetween')
	{
		$service = DB::connection('mysql')->table('queue_stats')
			->select(DB::raw('COUNT(agent) as count'), DB::raw('SUM(data2) as time'), DB::raw('SUM(data1) as delay'), DB::raw('ROUND(MAX(data1),2) as maxDelay'))
			->whereIn('agent', $request->agents)
			->whereIn('queuename', $request->queues)
			/** 7 and 8 is event answered */
			->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);


		/** get by date time */
		if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
			$time = calcTime($request);
			$service = $service->whereBetween('time', $time);
		}

		/** get transfer call */
		$transfer = DB::connection('mysql')->table('queue_stats')
			->select(DB::raw('COUNT(agent) as count'), DB::raw('SUM(data2) as time'), DB::raw('SUM(data1) as delay'), DB::raw('MAX(data1) as maxDelay'))
			->whereIn('agent', $request->agents)
			->whereIn('queuename', $request->queues)
			/** 7 and 8 is event answered */
			->where('event', 'TRANSFER');


		/** get by date time */
		if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
			$time = calcTime($request);
			$transfer = $transfer->whereBetween('time', $time);
		}



		if ($type == 'where')
			return [$service->where('data2', '>', $param1)->first(), $transfer->first()];


		return [$service->whereBetween('data2', [$param1, $param2])->first(), $transfer->first()];
	}
	/** ---  تماس های پاسخ داده شده بر اساس مدت مکالمه End -------------- */



	/** تماس های منتقل شده Start --------------- */
	public function getAnsweredTransfer($request)
	{
		/** get transfer call */
		$transfer = DB::connection('mysql')->table('queue_stats')
			->select('agent', DB::raw('COUNT(agent) as count'))
			->whereIn('agent', $request->agents)
			->whereIn('queuename', $request->queues)
			->orderBy('agent')
			->where('event', 'TRANSFER');

		/** get by date time */
		if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
			$time = calcTime($request);
			$transfer = $transfer->whereBetween('time', $time);
		}
		if (!$transfer->count())
			return [];
		return $transfer->get();
	}
	/** تماس های منتقل شده End --------------- */


	/** Answered_getAnsweredCallsDetail */
	public function Answered_getAnsweredCallsDetail($request)
	{
		try {
			$detail = DB::connection('mysql')->table('queue_stats')

				->select('event', 'queuename', 'agent', 'time', 'data1', 'data2', 'data3', 'callid')
				// ->groupBy('agent')
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues)
				/** 7 and 8 is event answered */
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER', 'TRANSFER']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$detail = $detail->whereBetween('time', $time);
			}

			$detail = $detail->get();

			/** get mobile via callid */
			$callid = [];
			foreach ($detail as $item) {
				$callid[] = $item->callid;
			}
			$mobile = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw("data2 as phone"), 'callid')
				->whereIn('callid', $callid)
				->where('event', 'ENTERQUEUE');




			return [
				'status' => 200,
				'message' => 'success',
				'data' => $detail,
				'mobile' => $mobile->get()

			];
		} catch (\Throwable $th) {
			return [];
		}
	}
}
