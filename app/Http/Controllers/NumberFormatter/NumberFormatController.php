<?php

namespace App\Http\Controllers\NumberFormatter;


use App\Numberformatter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class NumberFormatController extends Controller
{
	public function actions(Request $request)
	{
		$method = $request->method;


		/** -------------------------- Start check Permission -------------------------- */
		/** check permission
		 * if not permission return 403 else skip
		 */
		if ($Inaccessibility = checkFotInaccessibility('number_formatter')) {
			return $Inaccessibility;
		}
		/** -------------------------- End check Permission -------------------------- */

		switch ($method) {

			case 'getData':
				$res  = $this->getData($request);
				break;
			case 'update':
				$res  = $this->update($request);
				break;
			default:
				$res = [
					'status' => 500,
					'message' => 'no command found'
				];
		}
		return response()->json($res, $res['status']);
	}
	/** update data  ... */
	public function update($request)
	{
		try {

			$update = Numberformatter::where('name', $request->data['name'])->where('descrioption', $request->data['descrioption'])->first();
			$update->enable = !$update->enable;
			$update->save();

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
	/** get data  ... */
	public function getData($request)
	{
		try {

			$setting = Numberformatter::all();
			return [
				'status' => 200,
				'message' => 'success',
				'data' => $setting,
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
