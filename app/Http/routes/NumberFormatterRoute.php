<?php
Route::group(['middleware' => 'LicenceNumberFormatter'], function () {
    Route::post('/number-formatter', 'NumberFormatter\NumberFormatController@actions');
});
