<?php
Route::group(['middleware' => 'LicenceSurvey'], function () {
    Route::post('/survey/operator/action', "Survey\OperatorSurveyController@action");
    Route::post('/survey/core-survey/action', "Survey\CoreSurveyController@action");
    Route::post('/survey/setting/action', "Survey\SettingSurveyController@action");
    Route::post('/survey/uploads', 'Survey\CoreSurveyController@uploads');
});
