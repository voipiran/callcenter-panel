<?php

namespace App\Http\Controllers\Licence;


use App\Numberformatter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Licence;

class LicenceController extends Controller
{
	public function action(Request $request)
	{
		
		$method = $request->method;


		/** -------------------------- Start check Permission -------------------------- */
		$licenceName = null;
		switch ($method) {

			case 'getData':
				$licenceName = 'licence.index';
				break;
			case 'submitUpdate':
				$licenceName = 'licence.add';
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
			case 'submitUpdate':
				$res = $this->submitUpdate($request);
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
	public function getData()
	{
		try {
			$data = Licence::all();


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

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function submitUpdate($request)
	{
		$this->validate($request, [
			'license' => 'required',
		]);

		/**check the licence */
		try {
			$url = config('app.licence_endpoint');
			try {
				$res = $this->sendRequest($url, $request->all());

				if ($res['status'] == 200) {
					/**success */
					$data                       = json_decode($res['data']);
					$licence                    = $data->license;
					$program                    = $data->program;

					$newLincence                = new Licence;
					$newLincence->app_id        = $licence->id;
					$newLincence->type          = $licence->license_type;
					$newLincence->status        = 'success';
					$newLincence->licence       = $licence->license;
					$newLincence->customer_name = $licence->person_name;
					$newLincence->company_name  = $licence->name;

					$newLincence->app_name      = $program->name;
					$newLincence->app           = $program->app;
					$newLincence->app_verions   = $program->version;
					$newLincence->save();

					return [
						'status' => 200,
						'message' => 'licence added successfully!',
						'type' => 'licence-success'
					];
				}

				return [
					'status' => 500,
					'message' => 'Licence Is Invalid Or Used Before!',
					'type' => 'invalid-licence'
				];
			} catch (\Throwable $th) {
				return [
					'status' => 500,
					'message' => $th->getmessage()
				];
			}
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => $th->getmessage()
			];
		}
	}

	/**
	 * @param string $url the website url
	 * @param array $data the data will pass
	 * @return htmlContent of the website
	 */
	public function sendRequest($url, $data)
	{
		try {
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
			curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13"); // spoof
			// curl_setopt($ch, CURLOPT_HTTPHEADER, $httpHeader);

			$data = curl_exec($ch);
			$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

			// Check the return value of curl_exec(), too
			if ($data === false) {
				throw new Exception('Error Occured On Url ' . $url . "\n" . curl_error($ch));
			}
			curl_close($ch);
			return [
				'data' => $data,
				'status' => $httpcode
			];
		} catch (\Throwable $th) {
			throw $th;
		}
	}

	/** check client licence */
	public function postCheckLicence(Request $request)
	{
		if (!$request->app || !$request->licence) {
			return response()->json(['message' => 'failed'], 403);
		}

		if (Licence::where('app', $request->app)->where('licence', $request->licence)->count()) {
			return response()->json(['message' => 'success'], 200);
		}
		return response()->json(['message' => 'failed'], 403);
	}
}
