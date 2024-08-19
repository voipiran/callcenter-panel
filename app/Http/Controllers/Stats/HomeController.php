<?php

namespace App\Http\Controllers\Stats;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\Agent;
use App\QueuesDetails;
use App\SettingsApp;
use App\User;
use DB;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		// $this->middleware('auth');
	}

	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);

		$lang = SettingsApp::first();
		if ($lang->lang == 'fa') {
			App::setLocale('fa');
		} else {
			App::setLocale('en');
		}

		$aboutMe = Lang::get('aboutMe');
		// return $aboutMe['title'];
		return view('home', ['aboutMe' => $aboutMe]);
	}




	/** --------------------------------- Start Home component ---------------------------------- */
	/** action  */
	public function actions(Request $request)
	{
		$method = $request->method;
		switch ($method) {

			case 'Home_getData':
				$res  = $this->Home_getData($request);
				break;
			case 'Home_calcDateTime':
				$res  = $this->Home_calcDateTime($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}

	/** get data select-option from table Agent and ... */
	public function Home_getData($request)
	{
		try {

			// start get agent list
			if ($request->showAllAgent) {
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

				/** merge agent table queue_stats and QueuesDetails */
				// $obj_merged = (object) array_merge((array) $agent, (array) $agent2);
				// $agent = $obj_merged;
			} else {
				$query = QueuesDetails::where('keyword', 'member')->groupBy('data')->get(['data']);
				$agents = [];
				foreach ($query as $item) {
					$remove = str_replace('Local/', '', $item->data);
					$remove = str_replace('@from-queue/n,0', '', $remove);
					$agents[] = $remove;
				}
				$agent = Agent::whereIn('extension', $agents)->get(['name', 'extension']);
			}


			$queuePermission = Auth::user()->queues_available;
			if ($queuePermission[0] == "all") {
				$queue = Queues::get(['descr', 'extension']);
			} else {
				$queue = Queues::whereIn('extension', $queuePermission)->get(['descr', 'extension']);
			}

			return [
				'status' => 200,
				'message' => 'success',
				'queue' => $queue,
				'agent' => $agent
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** submit Home.vue for get detail answered component  */
	public function Home_calcDateTime($request)
	{
		try {
			return [
				'status' => 200,
				'message' => 'success',
				'timeFilter' => calcTime($request)

			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** --------------------------------- End Home component ---------------------------------- */
}
