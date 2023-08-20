<?php

Route::group(['middleware' => 'LicenceAutomaticCall'], function () {
    Route::post('/automatic-call/action', "AutomaticCall\AutomaticCallController@action");
    Route::post('/automatic-call/upload', "AutomaticCall\AutomaticCallController@upload");
});
