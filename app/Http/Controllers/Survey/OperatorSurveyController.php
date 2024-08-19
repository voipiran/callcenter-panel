<?php

namespace App\Http\Controllers\Survey;

use App\Agent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\QueuesDetails;
use Illuminate\Support\Facades\DB;
use App\Helpers;


class OperatorSurveyController extends Controller
{
	public function action(Request $request)
	{
		$method = $request->method;

		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($request->page == 'dashboard') {
			if ($Inaccessibility = checkFotInaccessibility('survey')) {
				return $Inaccessibility;
			}
		} else {
			if ($Inaccessibility = checkFotInaccessibility('surveyChild.operator')) {
				return $Inaccessibility;
			}
		}

		/** -------------------------- End check Permission -------------------------- */

		switch ($method) {

			case 'getData':
				$res  = $this->getData($request);
				break;
			case 'mountPageOperatorchart':
				$res = $this->mountPageOperatorchart($request);
				break;
			case 'activityChartOfTheYearBar':
				$res  = $this->activityChartOfTheYearBar($request);
				break;
			case 'activityChartOfTheYearPie':
				$res  = $this->activityChartOfTheYearPie($request);
				break;
			case 'satisfactionChart':
				$res  = $this->satisfactionChart($request);
				break;
			case 'activityDiagramMonthlyBasis':
				$res  = $this->activityDiagramMonthlyBasis($request);
				break;
			case 'getUsersOption':
				return $this->getUsersOption();
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}
	/** getData for main page operator survey (page browse) ... */
	public function getData($request)
	{

		/** set user according target page
		 * if target == dashboard -> return all user else return one user
		 */
		$users = $request->users;
		if (!$users) {
			$users = getUserList($request);
		}

		/** set queue according role
		 * if role == admin -> return all queue else return one queue
		 */
		$queues = $request->queues;
		if (!$queues) {
			$queues = getUserQueuesParsed($request);
		}

		/*** get date filter */
		$startDate = null;
		$endDate = null;
		if ($request->startDate && $request->endDate) {
			$startDate = $request->startDate;
			$endDate = $request->endDate;
		}

		try {
			$max_survey = DB::connection('mysql8_Survey')->table('settings')->select('survey_string', 'survey_queue')->get();
			$data = DB::connection('mysql8_Survey')->table('survey')
				->select(
					'survey_location',
					'agent_number',
					'date_time',
					DB::raw("SUM(survey_value) as total_survey"),
					DB::raw("ROUND(AVG(survey_value),2) as average_survey"),
					DB::raw("COUNT(agent_number) as count_survey")
				)
				->whereIn('agent_number', $users)
				->whereIn('survey_location', $queues)
				->orderBy(DB::raw("average_survey"), 'desc') // Order by average_survey in descending order
				->groupBy('agent_number')
				->where(function ($query) use ($startDate, $endDate) {
					if ($startDate && $endDate) {
						$query->whereBetween('date_time', [$startDate, $endDate]);
					}
				})
				->groupBy('survey_location');

			// filter by years
			if ($request->date) {
				$data->where('date_time', 'LIKE', "%$request->date%");
			}


			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data->get(),
				'max_survey' => $max_survey
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** --------------------------------- Start Get data page chart -------------------------- */
	/** mount function for get general data page operator-survey/chart */
	public function mountPageOperatorchart($request)
	{
		$max_survey = DB::connection('mysql8_Survey')->table('settings')->select('survey_string', 'survey_queue')->get();
		$user = DB::connection('mysql8_Survey')->table('survey')->where('agent_number', $request->agent_number)->first();

		return [
			'max_survey' => $max_survey,
			'user' => $user,
			'status' => 200,
			'message' => 'success',
		];
	}

	/** --------------------------- start get data bar chart  نمودار فعالیت سال*/
	public function activityChartOfTheYearBar($request)
	{

		/** set user according target page
		 * if target == dashboard -> return all user else return one user
		 */
		$users = getUserList($request);

		/** set queue according role
		 * if role == admin -> return all queue else return one queue
		 */
		$queues = $request->queues;
		if (!$queues) {
			$queues = getUserQueuesParsed($request);
		}

		/** dateRange[0] == تاریخ فروردین ماه */
		$data = [];
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[0], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[1], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[2], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[3], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[4], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[5], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[6], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[7], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[8], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[9], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[10], $users);
		$data[] = $this->calcByDateActivityChartOfTheYearBar($request, $queues, $request->dateRange[11], $users);
		return [
			'status' => 200,
			'message' => 'success',
			'activityChartOfTheYearBar' => $data,
		];
	}
	public function calcByDateActivityChartOfTheYearBar($request, $queues, $date, $users)
	{
		$data = DB::connection('mysql8_Survey')->table('survey')->select(
			'survey_location',
			'date_time',
			DB::raw('MONTH(date_time) as month'),
			DB::raw('SUM(survey_value) as total_survey'),
			DB::raw('AVG(survey_value) as average_survey'),
			DB::raw('COUNT(agent_number) as count_survey'),
			DB::raw('SUM(survey_value) as total_survey')
		)
			->whereBetween('date_time', [$date['startDate'], $date['endDate']])
			->whereIn('agent_number', $users)
			// ->whereIn('survey_location', explode(',', $request->survey_location))
			->whereIn('survey_location', $queues)
			->groupBy('survey_location')
			->get();

		if (!$data)
			return null;
		return $data[0];
	}
	/** --------------------------- End get data bar chart  نمودار فعالیت سال*/


	/**-------------------------- Start get data Pie chart  نمودار فعالیت سال*/
	public function activityChartOfTheYearPie($request)
	{

		/** set user according target page
		 * if target == dashboard -> return all user else return one user
		 */
		$users = getUserList($request);

		/** set queue according role
		 * if role == admin -> return all queue else return one queue
		 */
		$queues = $request->queues;
		if (!$queues) {
			$queues = getUserQueuesParsed($request);
		}


		$data = DB::connection('mysql8_Survey')->table('survey')->select(
			'survey_value',
			DB::raw('COUNT(survey_value) as count_survey')
		)
			->whereBetween('date_time', [$request->startDate, $request->endDate])
			->whereIn('agent_number', $users)
			->whereIn('survey_location', $queues)
			->groupBy('survey_value')
			->get();

		$activityDiagramHourlyBasis = DB::connection('mysql8_Survey')->table('survey')->select(
			DB::raw('HOUR(date_time) as hour'),
			DB::raw('AVG(survey_value) as average_survey'),
			DB::raw('COUNT(survey_value) as count_survey')
		)
			->whereIn('agent_number', $users)
			->whereBetween('date_time', [$request->startDate, $request->endDate])
			->whereIn('survey_location', $queues)
			->groupBy('hour')
			->get();

		return [
			'status' => 200,
			'message' => 'success',
			'activityChartOfTheYearPie' => $data,
			'activityDiagramHourlyBasis' => $activityDiagramHourlyBasis
		];
	}
	/** --------------------------End get data Pie chart  نمودار فعالیت سال*/


	/** -------------------------------- Star get data  نمودار میزان رضایتمندی*/
	public function satisfactionChart($request)
	{

		$queues = $request->queues;
		if (!$queues) {
			$queues = getUserQueuesParsed($request);
		}

		/** dateRange[0] == تاریخ فروردین ماه */
		$data = [];
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[0]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[1]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[2]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[3]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[4]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[5]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[6]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[7]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[8]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[9]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[10]);
		$data[] = $this->calcBysatisfactionChart($request, $queues, $request->dateRange[11]);
		return [
			'status' => 200,
			'message' => 'success',
			'satisfactionChart' => $data,
		];
	}
	public function calcBysatisfactionChart($request, $queues, $date)
	{

		$data = DB::connection('mysql8_Survey')->table('survey')->select(
			'survey_location',
			'date_time',
			DB::raw('MONTH(date_time) as month'),
			DB::raw('SUM(survey_value) as total_survey'),
			DB::raw('AVG(survey_value) as average_survey'),
			DB::raw('COUNT(agent_number) as count_survey'),
			DB::raw('SUM(survey_value) as total_survey')
		)
			->where('agent_number', $request->agent_number)
			->whereIn('survey_location', $queues)
			->whereBetween('date_time', [$date['startDate'], $date['endDate']])
			->groupBy('survey_location')
			->get();

		if (!$data)
			return null;
		return $data[0];
	}


	/** get all users for fill multiselect chart satisfaction */
	public function getUsersOption()
	{
		try {
			$agent = DB::connection('mysql')->table('queue_stats')
				->select('agent as name', 'agent as extension')
				->where('callid', 'MANAGER')
				->groupBy('agent')->get();


			/** get agent from table QueuesDetails */
			$query = QueuesDetails::where('keyword', 'member')->groupBy('data')->get(['data']);
			$agents = [];
			foreach ($query as $item) {
				$remove = str_replace('Local/', '', $item->data);
				$remove = str_replace('@from-queue/n,0', '', $remove);
				$agents[] = $remove;
			}
			$agent2 = Agent::whereIn('extension', $agents)->get(['name', 'extension']);

			foreach ($agent2 as $newAgent) {
				$dublicate = false;
				foreach ($agent as $oldAgent) {
					$dublicate = false;
					if ($oldAgent->name == $newAgent->name)
						$dublicate = true;
				}
				if ($dublicate == false)
					array_push($agent, $newAgent);
			}


			return [
				'status' => 200,
				'message' => 'success',
				'data' => $agent,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => $th->getMessage()
			];
		}
	}

	/** -------------------------------- Star get data  نمودار میزان رضایتمندی*/



	/** -------------------------Start نمودار فعالیت اپراتورها به صورت ماهیانه*/
	public function activityDiagramMonthlyBasis($request)
	{

		/** set user according target page
		 * if target == dashboard -> return all user else return one user
		 */
		$users = getUserList($request);

		/** set queue according role
		 * if role == admin -> return all queue else return one queue
		 */

		$queues = $request->queues;
		if (!$queues) {
			$queues = getUserQueuesParsed($request);
		}

		//    WHERE date_time >= '$from[$i]' AND date_time <= '$to[$i]' 
		/**
		 * 
		 * 
		 * فیلتر بر اساس ماه و سال مونده
		 */

		$data = DB::connection('mysql8_Survey')->table('survey')->select(
			DB::raw('DAY(date_time) as day'),
			'date_time',
			DB::raw('AVG(survey_value) as average_survey'),
			DB::raw('COUNT(survey_value) as count_survey')
		)
			->whereIn('agent_number', $users)
			->whereBetween('date_time', [$request->startDate, $request->endDate])
			->whereIn('survey_location', $queues)
			// ->groupBy('survey_location')
			->groupBy('day')
			->get();

		return [
			'status' => 200,
			'message' => 'success',
			'activityDiagramMonthlyBasis' => $data,
		];
	}
	/** -------------------------End نمودار فعالیت اپراتورها به صورت ماهیانه*/
}
