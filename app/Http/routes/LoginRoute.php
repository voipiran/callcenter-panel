<?php

Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::post('auth/logout', 'Auth\AuthController@getLogout');

/** route page usere for create edit and etc */
Route::post('/users/action', 'Auth\UserController@action');
Route::post('/roles/action', 'Auth\RoleController@action');
Route::post('/permission/action', 'Auth\PermissionController@action');

