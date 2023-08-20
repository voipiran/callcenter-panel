<?php

namespace App\Http\Controllers\Stats;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Queues;
use App\Agent;
use DB;
use App\Helpers;
use App\QueuesDetails;

class UnAnsweredController extends Controller
{
	/** action  */
	public function actions(Request $request)
	{

		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('stats.unAnswered')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		$method = $request->method;
		switch ($method) {
			case 'unAnswered_getData':
				$res  = $this->unAnswered_getData($request);
				break;
			case 'UnAnswered_getAnsweredCallsDetail':
				$res  = $this->UnAnswered_getAnsweredCallsDetail($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}

	public function unAnswered_getData($request)
	{
		try {
			/** جزئیات*/
			$details = $this->getDetail($request);

			// <!-- تماس های پاسخ داده نده در صف -->
			$qUnAnswered = $this->getQueueUnAnswered($request);

			// دلیل قطع شدن مکالمه
			$hangUp = $this->getHangUpState($request);

			return [
				'status' => 200,
				'message' => 'success',
				'details' => $details,
				'hangUp' => $hangUp,
				'qUnAnswered' => $qUnAnswered

			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** get detail for fit row one in component answered */
	public function getDetail($request)
	{
		try {
			$detail = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(agent) as count'), DB::raw('SUM(data1) as time'), DB::raw('SUM(data3) as delay'))
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->whereIn('event', ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$detail = $detail->whereBetween('time', $time);
			}


			/** شروع محاسبه میانگین نوبت هنگام ورود به صف */
			$getCallId = DB::connection('mysql')->table('queue_stats')
				->select('callid')
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->whereIn('event', ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$getCallId = $getCallId->whereBetween('time', $time);
			}


			$getCallId = $getCallId->get();
			$callId = [];
			foreach ($getCallId as $item) {
				$callId[] = $item->callid;
			}


			$numInQueue = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('AVG(data3) as numInQueue'))
				->whereIn('callid', $callId)
				->whereIn('event', ['ENTERQUEUE']);

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {

				$numInQueue = $numInQueue->whereBetween('time', $time);
			}



			/** پایان محاسبه میانگین نوبت هنگام ورود به صف */

			return [
				'numInQueue' => $numInQueue->first(),
				'detail' => $detail->first()
			];
		} catch (\Throwable $th) {
			return null;
		}
	}


	// <!-- تماس های بدون پاسخ در صف -->
	public function getQueueUnAnswered($request)
	{
		try {
			$qAnswered = DB::connection('mysql')->table('queue_stats')
				->select('queuename as lable', DB::raw('COUNT(data2) as count'))
				->groupBy('queuename')
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->whereIn('event', ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY']);

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
			/** hang uo by RINGCANCELED */
			$RINGCANCELED = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(data2) as count'))
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->where('event', 'ABANDON');


			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$RINGCANCELED = $RINGCANCELED->whereBetween('time', $time);
			}



			/** hang uo by EXITWITHTIMEOUT */
			$EXITWITHTIMEOUT = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(*) as count'))
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->where('event', 'EXITWITHTIMEOUT');

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$EXITWITHTIMEOUT = $EXITWITHTIMEOUT->whereBetween('time', $time);
			}


			/** hang uo by EXITWITHKEY */
			$EXITWITHKEY = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(*) as count'))
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->where('event', 'EXITWITHKEY');

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$EXITWITHKEY = $EXITWITHKEY->whereBetween('time', $time);
			}


			/** hang uo by EXITEMPTY */
			$EXITEMPTY = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('COUNT(*) as count'))
				->whereIn('queuename', $request->queues)
				/** 1 and 13 is event ABANDON */
				->where('event', 'EXITEMPTY');

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$EXITEMPTY = $EXITEMPTY->whereBetween('time', $time);
			}

			$filed1 = $RINGCANCELED->first();
			$filed2 = $EXITWITHTIMEOUT->first();
			$filed3 = $EXITWITHKEY->first();
			$filed4 = $EXITEMPTY->first();

			return [
				['lable' => 'RINGCANCELED', 'count' => $filed1->count],
				['lable' => 'EXITWITHTIMEOUT', 'count' => $filed2->count],
				['lable' => 'EXITWITHKEY', 'count' => $filed3->count],
				['lable' => 'EXITEMPTY', 'count' => $filed4->count],
			];
		} catch (\Throwable $th) {
			return [];
		}
	}


	/** UnAnswered_getAnsweredCallsDetail */
	public function UnAnswered_getAnsweredCallsDetail($request)
	{
		try {
			$detail = DB::connection('mysql')->table('queue_stats')

				->select('event', 'queuename', 'agent', 'time', 'data1', 'data2', 'data3', 'callid')
				// ->groupBy('agent')
				->whereIn('queuename', $request->queues)
				/** 7 and 8 is event answered */
				// ->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER', 'TRANSFER']);
				->whereIn('event', ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY']);


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
