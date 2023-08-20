<?php

namespace App\Http\Controllers\Survey;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\Survey;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CoreSurveyController extends Controller
{
	public function action(Request $request)
	{
		$method = $request->method;



		/** -------------------------- Start check Permission -------------------------- */
		$licenceName = null;
		switch ($method) {

			case 'getData':
				$licenceName = 'surveyChild.survey.index';
				break;
			case 'submitUpdate':
			case 'findData':
				$licenceName = 'surveyChild.survey.edit';
				break;
			case 'remove':
				$licenceName = 'surveyChild.survey.remove';
		}


		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility($licenceName)) {
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
			case 'getQueueOption':
				$res  = $this->getQueueOption();
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}
	/** getData for main page core survey (page browse) ... */
	public function getData($request)
	{
		try {
			$data = Survey::orderBy('id','desc')->get();
			$fillerData = [];
			foreach ($data as $item) {
				$item->customer_message = $this->getCustomerVoice($item->uniqueid);
				$fillerData[] = $item;
				# code...
			}
			return [
				'status' => 200,
				'message' => 'success',
				'data' => $fillerData,
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
			$data = DB::connection('mysql8_Survey')->table('survey')->find($request->id);
			$max_survey = DB::connection('mysql8_Survey')->table('settings')->select('survey_string', 'survey_queue')->where('survey_queue', $data->survey_location)->first();

			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data,
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
	/** fun submit btn edit */
	public function submitUpdate($request)
	{
		try {

			$survey = DB::connection('mysql8_Survey')->table('survey')->where('id', $request->id);
			if (!$survey->count())
				return [
					'status' => 500,
					'message' => 'رکورد مورد نظر یافت نشد'
				];

			$survey->update([
				'agent_name' => $request->agent_name,
				'agent_number' => $request->agent_number,
				'caller_name' => $request->caller_name,
				'caller_number' => $request->caller_number,
				'date_time' => $request->date_time,
				'survey_location' => $request->queue,
				'survey_value' => $request->survey_value,
				'uniqueid' => $request->uniqueid,
			]);

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

	/** delete record */
	public function remove($request)
	{
		try {

			$survey = DB::connection('mysql8_Survey')->table('survey')->where('id', $request->id)->first();
			if (!$survey)
				return [
					'status' => 500,
					'message' => 'رکورد مورد نظر یافت نشد'
				];

			$survey = DB::connection('mysql8_Survey')->table('survey')->where('id', $request->id)->delete();

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

		/** return file for page setting because upload in settingsurveyConroller */
		if ($request->page == 'setting') {
			return response()->json([
				'status'  => 200,
				'message' => 'success',
			], 200);
		}


		try {
			if ($request->file('promp1')) {
				$path =  storage_path("app/survey/survey/$request->id.wav");
				if (File::exists($path)) {
					Storage::disk('local')->delete("/survey/survey/$request->id.wav");
				}
				Storage::disk('local')->put("/survey/survey/$request->id.wav", File::get($request->file('promp1')));
			}

			$update = DB::connection('mysql8_Survey')->table('survey')->where('id', $request->id);
			if (!$update->count())
				return [
					'status' => 500,
					'message' => 'رکورد مورد نظر یافت نشد'
				];

			$update->update([
				'customer_voice_path' => "$request->id.wav",
			]);

			return response()->json([
				'status'  => 200,
				'message' => 'success',
			], 200);
		} catch (\Throwable $th) {
			return 'unSuccess';
		}
	}

	/** get data combobox Queue */
	public function getQueueOption()
	{
		try {
			$queue = Queues::get(['descr', 'extension']);
			return [
				'status' => 200,
				'message' => 'success',
				'queue' => $queue
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	/** get voice file name  */
	public	function getCustomerVoice($uniqueId)
	{
		
		$data = DB::connection('mysql4')->table('cdr')->where('uniqueid', $uniqueId)->where('recordingfile', '!=', '')->get();
		if (!count($data)) {
			return null;
		}
		// return $data;
		$data = $data[0]->recordingfile;
	
		$explode = explode('-', $data);
		$m = date('m', strtotime($explode[3]));
		$d = date('d', strtotime($explode[3]));
		$y = date('Y', strtotime($explode[3]));
		$file =  'customerVoices/' . $y . '/' . $m . '/' . $d . '/' . $data;
	
		return $file;
	}
}
