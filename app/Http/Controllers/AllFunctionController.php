<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\Agent;
use App\QueuesDetails;
use App\SettingsApp;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;



class AllFunctionController extends Controller
{

	/** action  */
	public function actions(Request $request)
	{
		$method = $request->method;




		/** -------------------------- Start check Permission -------------------------- */
		$licenceName = null;
		switch ($method) {

			case 'setLanguage':
				$licenceName = 'setting';
				break;
		}

		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility($licenceName)) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */
		switch ($method) {
			case 'Dashboard_getData':
				$res  = $this->Dashboard_getData();
				break;
			case 'Dashboard_detail':
				$res  = $this->Dashboard_detail();
				break;
			case 'setLanguage':
				$res  = $this->setLanguage($request);
				break;
			case 'getLanguage':
				$res  = $this->getLanguage('settingPage');
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}


	/** --------------------------------- start dashboard component ---------------------------------- */
	/** get user and queue count andd etc for show in dashboard */
	public function Dashboard_detail()
	{
		try {

			$queue_count = Queues::count();

			//  get agent count
			$query = QueuesDetails::where('keyword', 'member')->groupBy('data')->get(['data']);
			$agents = [];
			foreach ($query as $item) {
				$remove = str_replace('Local/', '', $item->data);
				$remove = str_replace('@from-queue/n,0', '', $remove);
				$agents[] = $remove;
			}
			$operator_count = Agent::whereIn('extension', $agents)->count();


			$call_count = DB::connection('mysql')->table('queue_stats')->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER'])->count();
			$call_today_count = DB::connection('mysql')->table('queue_stats')->whereIn('event', ['COMPLETEAGENT', 'COMPLETECALLER'])->whereBetween('time', [date('Y-m-d 00:00:00', time()), date('Y-m-d H:i:s', time())])->count();

			return [
				'status' => 200,
				'message' => 'success',
				'queue_count' => $queue_count,
				'call_today_count' => $call_today_count,
				'call_count' => $call_count,
				'operator_count' => $operator_count,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** get data component dashboarf */
	public function Dashboard_getData()
	{
		try {
			$agents = DB::connection('mysql')->table('queue_stats')
				->Join('qagent', 'queue_stats.qagent', '=', 'qagent.agent_id')
				->Join('qname', 'queue_stats.qname', '=', 'qname.qname_id')
				->select('qname.qname_id', 'qname.queue', 'qagent.agent', DB::raw('SUM(queue_stats.data2) as data2'), DB::raw('MAX(queue_stats.datetime) as lastCall'))
				->groupBy('queue_stats.qname')
				->groupBy('queue_stats.qagent');

			$queues = Queues::all();

			return [
				'status' => 200,
				'message' => 'success',
				'agents' => $agents->get(),
				'queues' => $queues,

			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** --------------------------------- End dashboard component ---------------------------------- */


	/** detect language for page realTime */
	public function getLanguage($type = 'realTime')
	{
		try {
			$setting = SettingsApp::first();
			$res = [
				'status' => 200,
				'message' => 'success',
				'lang' =>  $setting->lang,
				'dir' =>    $setting->dir,
			];

			if ($type == 'settingPage')
				return $res;

			return	json_encode($res);
		} catch (\Throwable $th) {
			$res = [
				'status' => 200,
				'message' => 'Settings table not found',
				'lang' =>  'fa',
				'dir' =>   'rtl',
			];

			return	json_encode($res);
		}
	}
	/** set language for page realTime */
	public function setLanguage($request)
	{

		try {
			$setting = SettingsApp::first();

			// return $setting;
			$setting->lang = $request->lang;
			$setting->dir = $request->dir;
			$setting->save();

			$res = [
				'status' => 200,
				'message' => 'success',
				'lang' =>  $setting->lang,
				'dir' =>    $setting->dir,
			];

			return	$res;

			//code...
		} catch (\Throwable $th) {
			return $res = [
				'status' => 500,
				'message' => 'unSuccess',
			];
		}
	}
}
