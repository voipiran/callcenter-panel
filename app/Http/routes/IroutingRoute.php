<?php
Route::group(['middleware' => 'LicenceIrouting'], function () {
    Route::post('/irouting/action', 'Irouting\IroutingController@actions');
    Route::post('/irouting/uploads', 'Irouting\IroutingController@uploads');
});
