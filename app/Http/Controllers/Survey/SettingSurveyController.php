<?php

namespace App\Http\Controllers\Survey;

use App\Agent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\QueuesDetails;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use App\Helpers;
use Illuminate\Support\Facades\Auth;

class SettingSurveyController extends Controller
{
	public function action(Request $request)
	{
		$method = $request->method;



		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('surveyChild.setting')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		switch ($method) {

			case 'getData':
				$res  = $this->getData($request);
				break;
			case 'findData':
				$res = $this->findData($request);
				break;
			case 'submitUpdate':
				$res = $this->submitUpdate($request);
				break;
			case 'remove':
				$res = $this->remove($request);
				break;
			case 'get_queue_in_survey':
				$res = $this->get_queue_in_survey($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}

		// 3.	در هنگام "ساخت" و یا "ویرایش" و یا حذف یک نظر سنجی دستور زیر باید اجرا شود
		try {
			$command = "sudo /var/www/html/admin/modules/framework/amp_conf/sbin/amportal a r";
			$output = shell_exec($command);
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}

		return response()->json($res, $res['status']);
	}
	/** getData for main page core survey (page browse) ... */
	public function getData($request)
	{
		try {
			$data = DB::connection('mysql8_Survey')->table('settings')->get();
			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** find recored for edit */
	public function findData($request)
	{
		try {
			$data = DB::connection('mysql8_Survey')->table('settings')->find($request->id);

			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** fun submit btn edit */
	public function submitUpdate($request)
	{
		try {

			$data = [
				'customer_voice_limit' => $request->customer_voice_limit,
				'customer_voice_status' => $request->customer_voice_status,
				'survey_queue' => $request->queue,
				'survey_name' => $request->survey_name,
				'survey_playagent' => $request->survey_playagent,
				'survey_status' => $request->survey_status,
				'survey_string' => $request->survey_string,
				'survey_voice' => $request->survey_voice
			];

			/** edit action */
			$id = null;
			if ($request->id) {
				$survey = DB::connection('mysql8_Survey')->table('settings')->where('id', $request->id);
				if (!$survey->count())
					return [
						'status' => 500,
						'message' => 'رکورد مورد نظر یافت نشد'
					];

				$survey->update($data);
			} else {
				// check  for add only one setting for any queue
				$old = DB::connection('mysql8_Survey')->table('settings')->where('survey_queue', $request->queue)->count();
				if ($old) {
					return [
						'status' => 500,
						'message' => 'Duplicated setting for queue',
						'error' => "برای هر صف فقط می توان یک تنظیمات ایجاد کرد"
					];
				}

				// add action
				$id = DB::connection('mysql8_Survey')->table('settings')->insertGetId($data);
			}


			if ($request->voice) {
				if ($request->id)
					$id = $request->id;

				$data = [
					'survey_voice' => "$id.wav"
				];
				$this->detectAndUpload($request->voice, $id);
				$survey = DB::connection('mysql8_Survey')->table('settings')->where('id', $id);
				$survey->update($data);
			}

			/** add to table queues_config db astrisk*/
			$this->updateQueuesConfig('add', $request->queue);

			return [
				'status' => 200,
				'message' => 'success',
				'id' => $id,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** update table queues_config db astrisk
	 * @param string type add or remove
	 * @param string queue number
	 */
	public function updateQueuesConfig($type, $queue)
	{
		try {
			if ($type == 'add') {
				DB::connection('mysql2')->table('queues_config')->where('extension', $queue)->update([
					'destcontinue' => 'ext-miscdests,100,1'
				]);
			} else if ($type == 'remove') {
				DB::connection('mysql2')->table('queues_config')->where('extension', $queue)->update([
					'destcontinue' => null
				]);
			}
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'error' => $th->getMessage(),
				'message' => 'faild'
			];
		}
	}
	/** delete record */
	public function remove($request)
	{
		try {

			$survey = DB::connection('mysql8_Survey')->table('settings')->where('id', $request->id)->first();
			if (!$survey)
				return [
					'status' => 500,
					'message' => 'رکورد مورد نظر یافت نشد'
				];

			/** add to table queues_config db astrisk*/
			$this->updateQueuesConfig('remove', $survey->survey_queue);

			$survey = DB::connection('mysql8_Survey')->table('settings')->where('id', $request->id)->delete();


			return [
				'status' => 200,
				'message' => 'success',
				'data' => $survey,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** uploads file core-survey */
	public function uploads(Request $request)
	{
		try {
			// disaled because uplode in fun submitUpdate 
			return response()->json([
				'status'  => 200,
				'message' => 'success',
			], 200);

			$path = null;
			if ($request->file('promp1')) {
				$path =  storage_path("app/survey/$request->id.wav");
				if (File::exists($path)) {
					Storage::disk('local')->delete("/survey/$request->id.wav");
				}
				Storage::disk('local')->put("/survey/$request->id.wav", File::get($request->file('promp1')));
			}

			if ($path) {
				$survey = DB::connection('mysql8_Survey')->table('settings')->where('id', $request->id);
				if (!$survey->count())
					return [
						'status' => 500,
						'message' => 'رکورد مورد نظر یافت نشد'
					];

				$survey->update([
					'customer_voice_path' => "/survey/$request->id.wav",
				]);
			}
			return response()->json([
				'status'  => 200,
				'message' => 'success',
			], 200);
		} catch (\Throwable $th) {
			return 'unSuccess';
		}
	}

	public function detectAndUpload($base64File, $id)
	{
		$fileData = base64_decode($base64File);
		$filePath = storage_path("app/survey/setting/$id.wav");
		// Save the file to the server
		file_put_contents($filePath, $fileData);
		return response()->json([
			'message' => 'File uploaded successfully',
		]);
	}

	/** get data select-option from table Agent and ... */
	public function get_queue_in_survey($request)
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

			// Retrieve records from the 'Queues' table where 'extension' is in the array of 'survey_queue' values
			$queuePermission = Auth::user()->queues_available;
			if ($queuePermission[0] == "all") {
				$q = [];
				$queueDefineInSurveyString = DB::connection('mysql8_Survey')->table('settings')->get();
				foreach ($queueDefineInSurveyString as $key => $value) {
					$q[] = $value->survey_queue;
				}
				// Retrieve records from the 'Queues' table where 'extension' is in the array of 'survey_queue' values
				$queue = Queues::whereIn('extension', $q)->get(['descr', 'extension']);
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
}
