<?php

namespace App\Http\Middleware;

use App\Licence;
use Closure;

class LicenceNumberFormatter
{

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		$callStatsLicense   = Licence::where('app', 'number_formatter')->first();
		// $callStatsLicense   = false;
		if (!$callStatsLicense) {
			$res = [
				'status' => 403,
				'message' => 'Lack of access due to license'
			];
			return response()->json($res, 403);
		}

		return $next($request);
	}
}
