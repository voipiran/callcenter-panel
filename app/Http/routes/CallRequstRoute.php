<?php
Route::group(['middleware' => 'LicenceCallRequest'], function () {
    Route::post('/call-request/action', "CallRequest\CallRequestController@action");
});
