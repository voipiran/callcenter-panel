<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

	/**
	 * The application's global HTTP middleware stack.
	 *
	 * @var array
	 */
	protected $middleware = [
		'Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode',
		'Illuminate\Cookie\Middleware\EncryptCookies',
		'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
		'Illuminate\Session\Middleware\StartSession',
		'Illuminate\View\Middleware\ShareErrorsFromSession',
		'App\Http\Middleware\VerifyCsrfToken',
		'App\Http\Middleware\LicenceMiddleWare',
	];

	/**
	 * The application's route middleware.
	 *
	 * @var array
	 */
	protected $routeMiddleware = [
		'auth' => 'App\Http\Middleware\Authenticate',
		'auth.basic' => 'Illuminate\Auth\Middleware\AuthenticateWithBasicAuth',
		'guest' => 'App\Http\Middleware\RedirectIfAuthenticated',
		'licence' => 'App\Http\Middleware\LicenceMiddleWare',


		'LicenceIrouting' => 'App\Http\Middleware\LicenceIrouting',
		'LicenceStats' => 'App\Http\Middleware\LicenceStats',
		'LicenceSurvey' => 'App\Http\Middleware\LicenceSurvey',
		'LicenceNumberFormatter' => 'App\Http\Middleware\LicenceNumberFormatter',
		'LicenceAutomaticCall' => 'App\Http\Middleware\LicenceAutomaticCall',
		'LicenceCallRequest' => 'App\Http\Middleware\LicenceCallRequest',
	];
}
