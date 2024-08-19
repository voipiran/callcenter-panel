<?php

namespace App\Http\Controllers\AutomaticCall;

use App\AutomaticCall;
use App\AutomaticCallTableCall;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queues;
use App\Trunk;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class AutomaticCallController extends Controller
{
	public function action(Request $request)
	{
		$method = $request->method;

		/** -------------------------- Start check Permission -------------------------- */
		$licenceName = null;
		switch ($method) {
			case 'getData':
				$licenceName  = 'automatic_call';
				break;
			case 'submitCreateAndUpdate':
			case 'findData':
				if ($request->id)
					$licenceName  = 'automatic_calls.edit';
				else
					$licenceName  = 'automatic_calls.add';
				break;
			case 'remove':
				$licenceName  = 'automatic_calls.remove';
				break;
			case 'submitListCallTypeCustom':
			case 'submitListCallTypeCsv':
				$licenceName = 'automatic_calls.showList';
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

			case 'getData':
				$res  = $this->getData();
				break;
			case 'submitCreateAndUpdate':
				$res  = $this->submitCreateAndUpdate($request);
				break;
			case 'getTrunkOption':
				$res  = $this->getTrunkOption();
				break;
			case 'getQueueOption':
				$res  = $this->getQueueOption();
				break;
			case 'findData':
				$res  = $this->findData($request->id);
				break;
			case 'remove':
				$res  = $this->remove($request->id);
				break;
			case 'submitListCallTypeCustom':
				$res = $this->submitListCallTypeCustom($request);
				break;
			case 'submitListCallTypeCsv':
				$res = $this->submitListCallTypeCsv($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}
	/** submitCreateAndUpdate new automatic-call row ... */
	public function submitCreateAndUpdate($request)
	{
		try {



			$data = new AutomaticCall();
			if ($request->id)
				$data = AutomaticCall::find($request->id);


			/** -------------------------- Start write in file ------------------------------------------- 
			 * write number queue in path <etc/asterisk/ queues_custom.conf> when selected type is Dialplan
			 */
			$path = '/etc/asterisk/queues_custom.conf';
			// for add new
			if ($request->script == 'Dialplan' && (!$request->id || $data->script == 'Queue')) {
				$content = "[$request->queue]";
				File::append($path, $content);
			}
			// for edit
			if ($request->script == 'Dialplan' && $data->script == 'Dialplan') {
				$oldString = "[$data->queue]"; // the string you want to replace
				$newString = "[$request->queue]"; // the replacement string
				$fileContents = file_get_contents($path);
				$pos = strpos($fileContents, $oldString);

				if ($pos !== false) {
					$fileContents = substr_replace($fileContents, $newString, $pos, strlen($oldString));
					file_put_contents($path, $fileContents);
				}
			}
			// for remove
			if ($request->script == 'Queue' && $data->script == 'Dialplan') {
				$oldString = "[$data->queue]"; // the string you want to replace
				$newString = ''; // the replacement string
				$fileContents = file_get_contents($path);
				$pos = strpos($fileContents, $oldString);

				if ($pos !== false) {
					$fileContents = substr_replace($fileContents, $newString, $pos, strlen($oldString));
					file_put_contents($path, $fileContents);
				}
			}
			/** -------------------------- End write in file ------------------------------------------- */

			$data->name = $request->name;
			$data->datetime_init = $request->datetime_init;
			$data->datetime_end = $request->datetime_end;
			$data->daytime_init = $request->daytime_init;
			$data->daytime_end = $request->daytime_end;
			$data->retries = $request->retries;
			$data->trunk = $request->trunk;
			$data->context = $request->context;
			$data->queue = $request->queue;
			$data->max_canales = $request->max_canales;
			$data->script = $request->script;
			$data->estatus = $request->estatus;
			$data->save();



			return [
				'status' => 200,
				'message' => 'success',
				'data' => $request->data,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** get data combobox Trunk */
	public function getTrunkOption()
	{
		try {

			$trunks = Trunk::all();
			return [
				'status' => 200,
				'message' => 'success',
				'trunks' => $trunks
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** get data combobox Queue */
	public function getQueueOption()
	{
		try {
			$queuePermission = Auth::user()->queues_available;
			if ($queuePermission[0] == "all") {
				$queue = Queues::get(['descr', 'extension']);
			} else {
				$queue = Queues::whereIn('extension', $queuePermission)->get(['descr', 'extension']);
			}

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
	/** get data  ... */
	public function getData()
	{
		try {

			$data = AutomaticCall::all();
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
	/** return one data for edit */
	public function findData($id)
	{
		try {

			$data = AutomaticCall::findOrFail($id);
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
	/** remove row */
	public function remove($id)
	{
		try {

			/** remove queue number from file queues.custome.config */
			$path = '/etc/asterisk/queues_custom.conf';
			if (File::exists($path)) {
				$data = AutomaticCall::find($id);
				if ($data->script == 'Dialplan') {
					$oldString = "[$data->queue]"; // the string you want to replace
					$newString = ''; // the replacement string
					$fileContents = file_get_contents($path);
					$pos = strpos($fileContents, $oldString);

					if ($pos !== false) {
						$fileContents = substr_replace($fileContents, $newString, $pos, strlen($oldString));
						file_put_contents($path, $fileContents);
					}
				}
			}


			AutomaticCallTableCall::where('id_campaign', $id)->delete();
			AutomaticCall::where('id', $id)->delete();
			return [
				'status' => 200,
				'message' => 'success',
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** submitListCall type Custom */
	public function submitListCallTypeCustom($request)
	{
		try {
			// check valid call number
			$phones = explode(PHP_EOL, $request->listUsers);
			foreach ($phones as $phone) {
				if (!is_numeric($phone)) {
					return [
						'status' => 500,
						'message' => "phone $phone is inValid",
					];
				}
			}

			// save in table phones
			foreach ($phones as $phone) {
				$newCall = new AutomaticCallTableCall();
				$newCall->phone = $phone;
				$newCall->id_campaign = $request->id;
				$newCall->save();
			}

			return [
				'status' => 200,
				'message' => 'success',
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}
	/** submitListCall type CSV */
	public function submitListCallTypeCsv($request)
	{
		try {
			// check valid call number
			$phones = explode(PHP_EOL, $request->listUsers);
			foreach ($phones as $phone) {
				if (!is_numeric($phone)) {
					return [
						'status' => 500,
						'message' => "phone $phone is inValid",
					];
				}
			}

			// save in table phones
			foreach ($phones as $phone) {
				$newCall = new AutomaticCallTableCall();
				$newCall->phone = $phone;
				$newCall->id_campaign = $request->id;
				$newCall->save();
			}

			return [
				'status' => 200,
				'message' => 'success',
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => 'faild',
				'error' => $th->getMessage()
			];
		}
	}

	public function upload(Request $request)
	{
		try {

			Storage::disk('local')->put('automatic-call/new-upload.scv', \File::get($request->file('csvFile')));
			$fp = fopen(storage_path("app/automatic-call/new-upload.scv"), 'r');


			/** validation */
			while (($data = fgetcsv($fp)) !== FALSE) {
				foreach ($data as $phone) {
					if (!is_numeric(preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $phone))) {
						return response()->json([
							'status' => 500,
							'message' => "phone $phone is inValid",
						], 500);
					}
				}
			}

			$fp = fopen(storage_path("app/automatic-call/new-upload.scv"), 'r');
			/** save in table calls */
			while (($data = fgetcsv($fp)) !== FALSE) {
				foreach ($data as $phone) {
					$newCall = new AutomaticCallTableCall();
					$newCall->phone = preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $phone);
					$newCall->id_campaign = $request->id;
					$newCall->save();
				}
			}

			return response()->json([
				'status'  => 200,
				'message' => 'success',
			], 200);
		} catch (\Throwable $th) {
			return response()->json([
				'status'  => 500,
				'message' => 'file is inValid',
			], 500);
		}
	}
}
