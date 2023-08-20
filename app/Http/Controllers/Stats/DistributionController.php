<?php

namespace App\Http\Controllers\Stats;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Queues;
use App\Agent;
use DB;
use App\Helpers;


class DistributionController extends Controller
{
	/** action  */
	public function actions(Request $request)
	{

		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('stats.distribution')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */


		$method = $request->method;
		switch ($method) {
			case 'distribution_getData':
				$res  = $this->distribution_getData($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}

	public function distribution_getData($request)
	{
		try {
			/** جزئیات*/
			$details = $this->getDetail($request);

			/** میانگین زمان انتظار در ساعت*/
			$waitByDate = $this->getWaitByDate($request);

			/** پراکندگی تماس ها در ساعت */
			$waitByTime = $this->getWaitByTime($request);

			/** پراکندگی تماس ها در هفته */
			$answeredInWeek = $this->getAnsweredInWeek($request);

			/** پراکندگی تماس ها در ماه*/
			$answeredInMonth = $this->getAnsweredInMonth($request);

			return [
				'status' => 200,
				'message' => 'success',
				'details' => $details,
				'waitByDate' => $waitByDate,
				'waitByTime' => $waitByTime,
				'answeredInWeek' => $answeredInWeek,
				'answeredInMonth' => $answeredInMonth,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/**-------------------------- مجموع start --------------------- */
	public function getDetail($request)
	{
		try {
			$answered = $this->CalculationDetail($request, ['COMPLETEAGENT', 'COMPLETECALLER']);
			$Unanswered = $this->CalculationDetail($request,  ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY']);
			$logout = $this->CalculationDetail($request, ['REMOVEMEMBER'], ['callid', 'MANAGER']);
			$login = $this->CalculationDetail($request, ['ADDMEMBER'], ['callid', 'MANAGER']);
			return [
				'answered' => $answered,
				'Unanswered' => $Unanswered,
				'logout' => $logout,
				'login' => $login,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	public function CalculationDetail($request, $event, $where = false)
	{
		$detail = DB::connection('mysql')->table('queue_stats')
			->select(DB::raw('COUNT(agent) as count'))
			->whereIn('queuename', $request->queues)
			->whereIn('event', $event);

		/** get by date time */
		if ($request->timeFilter || ($request->fromFilter && $request->toFilter)) {
			$time = calcTime($request);
			$detail = $detail->whereBetween('time', $time);
		}

		/** where
		 * if where == reject then get all time reject for any queue and use
		 * else use time < 15000 for get data
		 *  */
		if ($where = false) {
			$detail = $detail->where($where[0], $where[1]);
		}

		return $detail->first()->count;
	}
	/**-------------------------- مجموع End --------------------- */

	/**----- میانگین زمان انتظار در ساعت Start --------------------*/
	public function getWaitByDate($request)
	{
		try {
			$answered = $this->CalculationWaitByDate($request, ['COMPLETEAGENT', 'COMPLETECALLER'], 'Answered');
			$Unanswered = $this->CalculationWaitByDate($request, ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY'], 'Unanswered');
			$logout = $this->CalculationWaitByDate($request,  ['REMOVEMEMBER'], 'Logout', ['callid', 'MANAGER']);
			$login = $this->CalculationWaitByDate($request,  ['ADDMEMBER'], 'Login', ['callid', 'MANAGER']);
			return [
				'answered' => $answered,
				'Unanswered' => $Unanswered,
				'logout' => $logout,
				'login' => $login,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	public function CalculationWaitByDate($request, $event, $name, $where = false)
	{
		try {
			$calc = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('DATE(time) as date'), DB::raw("COUNT(agent) as count$name"), DB::raw("ROUND(AVG(data1),2) as data1$name"), DB::raw("ROUND(AVG(data2),2) as data2$name"), DB::raw("SUM(data3) as data3$name"))
				->groupBy('date')
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
	/**----- میانگین زمان انتظار در ساعت End --------------------*/

	/**-----پراکندگی تماس ها در ساعت Start --------------------*/
	public function getWaitByTime($request)
	{
		try {
			$answered = $this->CalculationWaitByTime($request, ['COMPLETEAGENT', 'COMPLETECALLER'], 'Answered');
			$Unanswered = $this->CalculationWaitByTime($request, ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY'], 'Unanswered');
			$logout = $this->CalculationWaitByTime($request,  ['REMOVEMEMBER'], 'Logout', ['callid', 'MANAGER']);
			$login = $this->CalculationWaitByTime($request,  ['ADDMEMBER'], 'Login', ['callid', 'MANAGER']);
			return [
				'answered' => $answered,
				'Unanswered' => $Unanswered,
				'logout' => $logout,
				'login' => $login,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	public function CalculationWaitByTime($request, $event, $name, $where = false)
	{
		try {
			$calc = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('HOUR(time) as hour'), DB::raw("COUNT(agent) as count$name"), DB::raw("ROUND(AVG(data1),2) as data1$name"), DB::raw("ROUND(AVG(data2),2) as data2$name"), DB::raw("SUM(data3) as data3$name"))
				->groupBy('hour')
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
	/**-----پراکندگی تماس ها در ساعت End --------------------*/

	/** -----------	پراکندگی تماس ها در روز های هفته Start--------*/
	public function getAnsweredInWeek($request)
	{
		try {
			$answered = $this->CalculationAnsweredInWeek($request, ['COMPLETEAGENT', 'COMPLETECALLER'], 'Answered');
			$Unanswered = $this->CalculationAnsweredInWeek($request, ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY'], 'Unanswered');
			$logout = $this->CalculationAnsweredInWeek($request,  ['REMOVEMEMBER'], 'Logout', ['callid', 'MANAGER']);
			$login = $this->CalculationAnsweredInWeek($request,  ['ADDMEMBER'], 'Login', ['callid', 'MANAGER']);
			return [
				'answered' => $answered,
				'Unanswered' => $Unanswered,
				'logout' => $logout,
				'login' => $login,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	public function CalculationAnsweredInWeek($request, $event, $name, $where = false)
	{
		try {
			$calc = DB::connection('mysql')->table('queue_stats')
				->select(DB::raw('WEEKDAY(time) as day'), DB::raw("COUNT(agent) as count$name"), DB::raw("ROUND(AVG(data1),2) as data1$name"), DB::raw("ROUND(AVG(data2),2) as data2$name"), DB::raw("SUM(data3) as data3$name"))
				->groupBy('day')
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
	/** -----------	پراکندگی تماس ها در روز های هفته End--------*/

	/** -----------------پراکندگی تماس ها در ماه  Start -------- */
	public function getAnsweredInMonth($request)
	{
		try {
			$answered = $this->CalculationAnsweredInMonth($request, ['COMPLETEAGENT', 'COMPLETECALLER'], 'Answered');
			$Unanswered = $this->CalculationAnsweredInMonth($request, ['ABANDON', 'EXITWITHTIMEOUT', 'EXITWITHKEY', 'EXITEMPTY'], 'Unanswered');
			$logout = $this->CalculationAnsweredInMonth($request,  ['REMOVEMEMBER'], 'Logout', ['callid', 'MANAGER']);
			$login = $this->CalculationAnsweredInMonth($request,  ['ADDMEMBER'], 'Login', ['callid', 'MANAGER']);
			return [
				'answered' => $answered,
				'Unanswered' => $Unanswered,
				'logout' => $logout,
				'login' => $login,
			];
		} catch (\Throwable $th) {
			return [];
		}
	}
	public function CalculationAnsweredInMonth($request, $event, $name, $where = false)
	{
		try {
			$calc = DB::connection('mysql')->table('queue_stats')
				->select('time', DB::raw('Month(time) as month'), DB::raw("COUNT(agent) as count$name"), DB::raw("ROUND(AVG(data1),2) as data1$name"), DB::raw("ROUND(AVG(data2),2) as data2$name"), DB::raw("SUM(data3) as data3$name"))
				->groupBy('month')
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
	/** -----------------پراکندگی تماس ها در ماه  End -------- */
}
