<?php

namespace App\Http\Controllers\CallRequest;

use App\CallRequest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CallRequestController extends Controller
{
	public function action(Request $request)
	{

		$method = $request->method;

		// /** -------------------------- Start check Permission -------------------------- */
		// $licenceName = null;
		// switch ($method) {

		// 	case 'getData':
		// 		$licenceName = 'licence.index';
		// 		break;
		// 	case 'submitUpdate':
		// 		$licenceName = 'licence.add';
		// 		break;

		// }

		// /** check permission
		//  * if not permission return 403 else skip
		//  */
		// if ($Inaccessibility = checkFotInaccessibility($licenceName)) {
		// 	return $Inaccessibility;
		// }
		// /** -------------------------- End check Permission -------------------------- */

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
			$data = CallRequest::first();
			if (!$data) {
				$data = new CallRequest();
				$data->enable	= false;
				$data->trunk_name	= "SIP/TCI";
				$data->outbound_prefix	= "9";
				$data->callerid_name	= "MyCompany";
				$data->callerid_number	= "99009900";
				$data->dial_logging = "0";
				$data->save();
			}
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
		/**check the licence */
		try {

			$this->validate($request, [
				'outbound_prefix' => 'required',
				'trunk_name' => 'required',
				'outbound_prefix' => 'required',
				'callerid_name' => 'required',
				'callerid_number' => 'required',
			]);

			$data = CallRequest::first();
			$data->enable	= $request->enable;
			$data->trunk_name	= $request->trunk_name;
			$data->outbound_prefix	= $request->outbound_prefix;
			$data->callerid_name	= $request->callerid_name;
			$data->callerid_number	= $request->callerid_number;
			$data->dial_logging = $request->dial_logging;
			$data->save();

			return [
				'status' => 200,
				'message' => 'success',
				'data' => $data,
			];
		} catch (\Throwable $th) {
			return [
				'status' => 500,
				'message' => $th->getmessage()
			];
		}
	}
}
