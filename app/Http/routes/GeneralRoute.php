<?php
// main route
Route::get('/', 'Stats\HomeController@index');

// get language for page realTime
Route::get('/get-lang', 'AllFunctionController@getLanguage');

// public function
Route::post('/allActions', 'AllFunctionController@actions');


Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

