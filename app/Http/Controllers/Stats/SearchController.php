<?php

namespace App\Http\Controllers\Stats;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Queues;
use App\Agent;
use App\Events;
use App\QueuesDetails;
use DB;


class SearchController extends Controller
{
	/** action  */
	public function actions(Request $request)
	{
		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('stats.search')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		$method = $request->method;
		switch ($method) {
			case 'Search_getData':
				$res  = $this->Search_getData($request);
				break;
			case 'Search_submit':
				$res  = $this->Search_submit($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}

	public function Search_getData($request)
	{
		try {
			$agentsAvailable = DB::connection('mysql')->table('queue_stats')
				->select('agent as name', 'agent as extension')
				->groupBy('agent')->get();

			$queuesAvailable = Queues::get(['descr', 'extension']);
			$eventsAvailable = Events::all();

			$query = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('MAX(CAST(data1  AS UNSIGNED)) as maxDelay'), DB::raw('MAX(CAST(data2  AS UNSIGNED)) as maxAnswered'))
				->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER'])->first();

			$maxDelay = $query->maxDelay;
			$maxAnswered = $query->maxAnswered;

			return [
				'status' => 200,
				'message' => 'success',
				'queuesAvailable' => $queuesAvailable,
				'agentsAvailable' => $agentsAvailable,
				'eventsAvailable' => $eventsAvailable,
				'maxDelay' => $maxDelay,
				'maxAnswered' => $maxAnswered,
				'query' => $query,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** submit search in search component (after change filter) 
	 * @param $request->export -> use for btn export
	 */
	public function Search_submit($request)
	{
		try {
			$data = DB::connection('mysql')->table('queue_stats')
				->select('event', 'queuename', 'agent', 'data2 as data2', 'data1 as data1', 'data3 as data3', 'time', 'callid')
				->where('event', '!=', 'QUEUESTART')
				->where('event', '!=', 'DID')
				->where('event', '!=', 'CONFIGRELOAD');
			/** filter by agnet  */
			if ($request->agents)
				$data = $data->where('agent', $request->agents);

			/** filter by queue  */
			if ($request->queues)
				$data = $data->where('queuename', $request->queues);

			/** filter by event  */
			if ($request->events)
				$data = $data->where('event', $request->events);

			/** filter by date  */
			/** get by date time */
			$time = null;
			if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
				$time = calcTime($request);
				$data = $data->whereBetween('time', $time);
			}

			/** filter by delay  */
			if ($request->delay)
				$data = $data->where(DB::raw('CAST(data1  AS UNSIGNED)'), $request->delay);

			/** filter by answered time  */
			if ($request->answered)
				$data = $data->where(DB::raw('CAST(data2  AS UNSIGNED)'), $request->answered);

			/** filter by num  */
			if ($request->number)
				$data = $data->where(DB::raw('CAST(data3  AS UNSIGNED)'), $request->number);

			/** filter by callid  */
			if ($request->callid)
				$data = $data->where('callid', $request->callid);

			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data->get(),
				'time' => $time
			];


			// return [
			// 	'status' => 200,
			// 	'message' => 'success',
			// 	'total' => $data->count(),
			// 	'data' => $data->take($request->perPage + 1)->skip($request->perPage * --$request->page)->get(),
			// 	'time' => $time

			// ];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
}
