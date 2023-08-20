<?php

namespace App\Http\Controllers\Stats;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Queues;
use App\Agent;
use DB;
use App\Helpers;
use App\QueuesDetails;

class OperatorController extends Controller
{

	/** action  */
	public function actions(Request $request)
	{
		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('stats.operator')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		$method = $request->method;
		switch ($method) {
			case 'Operator_getData':
				$res  = $this->Operator_getData($request);
				break;
			case 'Operator_getAllReport':
				$res  = $this->Operator_getAllReport($request);
				break;

			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}

	public function Operator_getData($request)
	{
		try {
			$details = $this->getDetail($request);
			// مدیریت تماس توسط کارشناس
			$disposition = $this->getDisposition($request);
			// جزئیات وقفه
			$agentAvailability = $this->getAgentAvailability($request);


			/** get first and last time */
			$time = $this->getFirstAndLastTime($request);

			return [
				'status' => 200,
				'message' => 'success',
				'disposition' => $disposition,
				'agentAvailability' => $agentAvailability,
				'details' => $details,
				'time' => $time
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** get detail for fit row one in component Operator */
	public function getDetail($request)
	{
		try {
			$detail = DB::connection('mysql')->table('queue_stats')
				->select('agent')
				->groupBy('agent')
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues);
			// ->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER']);


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

	/** get time first and last */
	public function getFirstAndLastTime($request)
	{
		try {
			$time = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('MAX(time) as lastTime'), DB::raw('MIN(time) as firstTime'))
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues)->first();

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$getTime = calcTime($request);
				$time = ['firstTime' => $getTime[0], 'lastTime' => $getTime[1]];
			}

			return $time;
		} catch (\Throwable $th) {
			return [];
		}
	}
	//--------------- Start  مدیریت تماس توسط کارشناس---------------
	public function getDisposition($request)
	{
		try {
			$completeAgent = $this->CalculationDisposition($request, ['COMPLETEAGENT'], 'CompleteAgent');
			$completeCaller = $this->CalculationDisposition($request, ['COMPLETECALLER'], 'CompleteCaller');
			$transfer = $this->CalculationDisposition($request, ['TRANSFER'], 'Transfer');


			return [
				'completeAgent' => $completeAgent,
				'completeCaller' => $completeCaller,
				'transfer' => $transfer
			];
		} catch (\Throwable $th) {
			return [];
		}
	}

	public function CalculationDisposition($request, $event, $name)
	{
		try {
			$calc = DB::connection('mysql')->table('queue_stats')
				->select('time', 'agent', DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("ROUND(AVG(data1),2) as data1$name"), DB::raw("ROUND(AVG(data2),2) as data2$name"), DB::raw("SUM(data3) as data3$name"))
				->groupBy('agent')
				->whereIn('agent', $request->agents)
				->whereIn('queuename', $request->queues)
				->whereIn('event', $event);


			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$calc = $calc->whereBetween('time', $time);
			}
			return $calc->get();
		} catch (\Throwable $th) {
			return null;
		}
	}
	//--------------- End  مدیریت تماس توسط کارشناس---------------

	//--------------- Start جزئیات وقفه---------------
	public function getAgentAvailability($request)
	{
		try {
			/** CalculationAgentAvailability param 
			 * @param 1 => _REQUEST
			 * @param 2 => array of event
			 * @param 3 => string name . use for name of feild
			 * @param 4 => array ['key','value] for where. default false
			 * @param 5 => arry name of feilds for groupBy. default 'agent'
			 */
			$completeAgent = $this->CalculationAgentAvailability($request, ['COMPLETEAGENT', 'COMPLETECALLER'], 'Answered');
			$ringUnAnswered = $this->CalculationAgentAvailability($request, ['RINGNOANSWER'], 'RingUnAnswered', ['data1', 'RingUnAnswered']);
			/** ناموفق یکتا */
			$unSuccessful = $this->CalculationAgentAvailability($request, ['RINGNOANSWER'], 'UnSuccessful', ['data1', 'UnSuccessful']);
			$reject = $this->CalculationAgentAvailability($request, ['RINGNOANSWER'], 'Reject', ['data1', 'reject']);
			$session = $this->CalculationAgentAvailability($request, ['ADDMEMBER', 'REMOVEMEMBER'], 'Session', ['callid', 'MANAGER'], false);
			$puse = $this->CalculationAgentAvailability($request, ['PAUSE', 'UNPAUSE', 'PAUSEALL', 'UNPAUSEALL'], 'Puse', false, false);

			return [
				'completeAgent' => $completeAgent,
				'ringUnAnswered' => $ringUnAnswered,
				'unSuccessful' => $unSuccessful,
				'reject' => $reject,
				'session' => $session,
				'puse' => $puse,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	/** method calc puse detail 
	 * @param 1 => _REQUEST
	 * @param 2 => array of event
	 * @param 3 => string name . use for name of feild
	 * @param 4 => array ['key','value] for where. default false
	 * @param 5 => string name of feild for groupBy. default 'agent'
	 */
	public function CalculationAgentAvailability($request, $event, $name, $where = false, $groupBy = 'agent')
	{
		try {
			if ($groupBy) {
				$data = DB::connection('mysql')->table('queue_stats')
					->select('time', 'queuename', 'agent', DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("SUM((CAST(data1  AS UNSIGNED)))  as data1$name"), DB::raw("SUM((CAST(data2  AS UNSIGNED))) as data2$name"))
					->whereIn('agent', $request->agents)
					->whereIn('queuename', $request->queues)
					->whereIn('event', $event)
					->groupBy($groupBy)
					->groupBy('queuename');
			} else {
				$data = DB::connection('mysql')->table('queue_stats')
					->select('event', 'queuename', 'time', 'agent', DB::raw('concat(DATE(time),agent) as mergeField'))
					->whereIn('agent', $request->agents)
					->whereIn('queuename', $request->queues)
					->whereIn('event', $event)
					->orderBy('time');
			}


			/** where
			 * if where == reject then get all time reject for any queue and use
			 * else use time < 15000 for get data
			 *  */
			if ($where) {
				if ($where[1] == 'reject') {


					$rejectData = collect([]);
					foreach ($request->queues as $queue) {

						$query = QueuesDetails::where('keyword', 'timeout')
							->where('id', $queue)
							->first();

						$data = DB::connection('mysql')->table('queue_stats')
							->select('time', 'queuename', 'agent', DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("SUM((CAST(data1  AS UNSIGNED)))  as data1$name"), DB::raw("SUM((CAST(data2  AS UNSIGNED))) as data2$name"), 'callid')
							->whereIn('agent', $request->agents)
							->whereIn('event', $event)
							->where($where[0], '<', $query->data * 1000)
							->where($where[0], '!=', 0)
							->where('queuename', $queue)
							->groupBy('agent');

						/** get by date time */
						if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
							$time = calcTime($request);
							$mainData = $data->whereBetween('time', $time);
						}

						$rejectData = $rejectData->merge($data->get());
					}

					// return $rejectData = $rejectData->groupBy('agent');

					/** Start sum countReject according similar agent */
					$calc = array();
					foreach ($rejectData as $key => $value) {
						if (isset($calc["$value->agent"])) {
							$calc["$value->agent"] = [
								'agent' => $value->agent,
								'countReject' => $value->countReject + $calc["$value->agent"]->countReject,
								'data1Reject' => $value->data1Reject + $calc["$value->agent"]->data1Reject,
								'data2Reject' => $value->data2Reject + $calc["$value->agent"]->data2Reject,
								'date' => $value->date,
								'queuename' => $value->queuename,
								'time' => $value->time,
							];
						} else {
							$calc["$value->agent"] = $value;
						}
					}
					/** End sum countReject according similar agent */

					return array_values($calc);
				} else if (($where[1] == 'RingUnAnswered')) {

					$mainData = DB::connection('mysql')->table('queue_stats')
						->select('callid', 'time', 'queuename', 'agent', DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("SUM((CAST(data1  AS UNSIGNED)))  as data1$name"), DB::raw("SUM((CAST(data2  AS UNSIGNED))) as data2$name"))
						->whereIn('agent', $request->agents)
						->whereIn('queuename', $request->queues)
						->where($where[0], '!=', 0)
						->whereIn('event', ['RINGNOANSWER'])
						->groupBy('callid');

					/** get by date time */
					if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
						$time = calcTime($request);
						$mainData = $mainData->whereBetween('time', $time);
					}

					// return $mainData->get();

					/** در این کوئری های باید بررس شود با فیلد callid ایوند COMPLETEAGENT و یاCOMPLETECALLERوجود نداشته باشد. */
					$callid = [];
					foreach ($mainData->get() as $row) {
						$callid[] = $row->callid;
					}
					$excludedData = DB::connection('mysql')->table('queue_stats')
						->select('callid', 'time', 'queuename', 'agent', DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("SUM((CAST(data1  AS UNSIGNED)))  as data1$name"), DB::raw("SUM((CAST(data2  AS UNSIGNED))) as data2$name"))
						->whereIn('agent', $request->agents)
						->whereIn('queuename', $request->queues)
						->where($where[0], '!=', 0)
						->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER'])
						->groupBy('callid');

					// return $excludedData->get();

					$filterData = collect();
					foreach ($mainData->get() as $filter) {
						$excludeSatstus = false;
						foreach ($excludedData->get() as $excluded) {
							if ($filter->callid == $excluded->callid) {
								$excludeSatstus =  true;
							}
						}
						if (!$excludeSatstus) {
							$filterData->push($filter);
						}
					}
					// return $filterData;
					$data = collect();
					foreach ($request->agents as $agent) {
						$countRingUnAnswered = 0;
						foreach ($filterData as $item) {
							if ($item->agent == $agent) {
								$countRingUnAnswered += $item->countRingUnAnswered;
							}
						}
						$data->push([
							'agent' => $agent,
							'countRingUnAnswered' => $countRingUnAnswered
						]);
					}

					return $data;
				} else if (($where[1] == 'UnSuccessful')) {



					/** get event UnSuccessful */
					$mainData = DB::connection('mysql')->table('queue_stats')
						->select('agent', DB::raw("COUNT(agent) as count$name"), 'callid', 'time')
						->whereIn('agent', $request->agents)
						->whereIn('queuename', $request->queues)
						->whereIn('event', $event)
						->groupBy('callid');

					/** get by date time */
					if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
						$time = calcTime($request);
						$mainData = $mainData->whereBetween('time', $time);
					}

					/** در این کوئری های باید بررس شود با فیلد callid ایوند COMPLETEAGENT و یاCOMPLETECALLERوجود نداشته باشد. */
					$callid = [];
					foreach ($mainData->get() as $row) {
						$callid[] = $row->callid;
					}
					$excludedData = DB::connection('mysql')->table('queue_stats')
						->select('agent', DB::raw("COUNT(agent) as count$name"), 'callid', 'time')
						->whereIn('agent', $request->agents)
						->whereIn('queuename', $request->queues)
						->whereIn('callid', $callid)
						->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER'])
						->groupBy('callid');

					$data = collect();
					foreach ($mainData->get() as $filter) {
						$excludeSatstus = false;
						foreach ($excludedData->get() as $excluded) {
							if ($filter->callid == $excluded->callid) {
								$excludeSatstus = true;
							}
						}
						if (!$excludeSatstus) {
							$data->push([
								"countUnSuccessful" => $filter->countUnSuccessful,
								'agent' => $filter->agent,
								'time' => $filter->time,
							]);
						}
					}

					return $data;
				} else
					$data = $data->where($where[0], '<=', $where[1]);
			}

			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$data = $data->whereBetween('time', $time);
			}





			return $data->get();
		} catch (\Throwable $th) {
			return null;
		}
	}
	//--------------- End جزئیات وقفه---------------


	/**----------- Start گزارش کامل کارشناس ----------*/

	public function Operator_getAllReport($request)
	{
		try {
			$report = DB::connection('mysql')->table('queue_stats')
				->select('time', 'agent', "data1", "data2", "data3", 'event', 'queuename', 'callid')
				->whereIn('agent', $request->agents)
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER', 'RINGNOANSWER', 'RINGCANCELED', 'AGENTLOGIN', 'AGENTLOGOFF', 'PAUSE', 'UNPAUSE'])
				->whereIn('queuename', $request->queues);


			/** get by date time */
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$report = $report->whereBetween('time', $time);
			}

			if ($request->export) {
				return [
					'status' => 200,
					'message' => 'success',
					'data' => $report->get()
				];
			}

			return [
				'status' => 200,
				'message' => 'success',
				'allReport' => $report->take($request->perPage + 1)->skip($request->perPage * --$request->page)->get()
			];
		} catch (\Throwable $th) {
			return null;
		}
	}
	/**----------- End گزارش کامل کارشناس ----------*/
}
