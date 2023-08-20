<?php

Route::group(['middleware' => 'LicenceStats'], function () {
    // home component
    Route::post('/stats/homeActions', 'Stats\HomeController@actions');
    // answered component
    Route::post('/stats/answeredActions', 'Stats\AnsweredController@actions');
    // unAnswered component
    Route::post('/stats/unAnsweredActions', 'Stats\UnAnsweredController@actions');
    // distribution component
    Route::post('/stats/distributionActions', 'Stats\DistributionController@actions');
    // Operator component
    Route::post('/stats/operatorActions', 'Stats\OperatorController@actions');
    // search component
    Route::post('/stats/searchActions', 'Stats\SearchController@actions');
});
