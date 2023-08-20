<?php

namespace App\Http\Middleware;

use App\Licence;
use Closure;

class LicenceMiddleWare
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
		// return 321;
		// $callStatsLicense   = Licence::where('app', 'irouting')->first();
		// if (!$callStatsLicense) {
		// 	// return abort(403, 'permission denied');
		// }

		return $next($request);
	}
}
