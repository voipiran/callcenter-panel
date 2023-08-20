<?php

/** Login route */
require 'routes/LoginRoute.php';


Route::group(['middleware' => 'auth'], function () {
    /** import public route */
    require 'routes/GeneralRoute.php';

    /** import stats route */
    require 'routes/StatsRoute.php';

    /** import irouting route */
    require 'routes/IroutingRoute.php';

    /** import Number-formatter */
    require 'routes/NumberFormatterRoute.php';

    /** import Automatic Call */
    require 'routes/AutomaticCallRoute.php';

    /** import survey route */
    require 'routes/SurveyRoute.php';

    /** import survey route */
    require 'routes/LicenceRoute.php';
});

/** import route test */
require 'routes/testRoute.php';
