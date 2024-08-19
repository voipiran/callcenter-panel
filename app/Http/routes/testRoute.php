<?php

use App\Agent;
use App\AutomaticCall;
use App\GroupPermision;
use App\Http\Controllers\Survey\OperatorSurveyController;
use App\Http\Controllers\Survey\SettingSurveyController;
use App\Licence;
use App\Queues;
use App\QueuesDetails;
use App\User;
use App\Role;
use App\Permision;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

Route::get('/test', function () {
    $queuePermission = Auth::user()->queues_available;
    if ($queuePermission[0] == "all") {
        $queue = Queues::get(['descr', 'extension']);
    } else {
        $queue = Queues::whereIn('extension', $queuePermission)->get(['descr', 'extension']);
    }

    return $queue;

    $user = User::find(1);
    $user->queues_available = ["8001", "8002"];
    $user->save();
    return $user;
    $groupPermissions = GroupPermision::with('permissions')->get();
    return $groupPermissions;

    $data = DB::connection('mysql8_Survey')->table('survey')->select(
        'survey_location',
        'date_time',
        DB::raw('MONTH(date_time) as month'),
        DB::raw('SUM(survey_value) as total_survey'),
        DB::raw('AVG(survey_value) as average_survey'),
        DB::raw('COUNT(agent_number) as count_survey'),
        DB::raw('SUM(survey_value) as total_survey')
    )
        ->whereBetween('date_time', ["2023/04/18 23:59:59", "2024/02/20 00:00:00"])
        ->whereIn('agent_number', [3001, 3002])
        ->whereIn('survey_location', ["8001"])
        ->groupBy('survey_location', 'month')
        ->get();



    // Now $translatedData contains the mapped data or an empty collection if there are no results.


    // Now $translatedData contains the mapped data or an empty collection if there are no results.


    return $data;

    $test = new SettingSurveyController();
    return $test->updateQueuesConfig('add', '8001');
    // $test->updateQueuesConfig('remove','8001');
    return 'ok';
    return Role::all();

    $data = DB::connection('mysql4')->table('cdr')->where('uniqueid', ['1681710587.379'])->where('recordingfile', '!=', '')->get(['recordingfile']);
    $data = DB::connection('mysql4')->table('cdr')->where('uniqueid', ['1681710587.379'])->where('recordingfile', '!=', '')->get();
    if (!count($data)) {
        return null;
    }
    // return $data;
    $data = $data[0]->recordingfile;

    $explode = explode('-', $data);
    $m = date('m', strtotime($explode[3]));
    $d = date('d', strtotime($explode[3]));
    $y = date('Y', strtotime($explode[3]));
    $file =  'customerVoices/' . $y . '/' . $m . '/' . $d . '/' . $data;

    return env('SERVER') . $file;




    return;
    $string = "Ú©Ø§Ø±Ø´Ù†Ø§Ø³ ÙØ±ÙˆØ´ 2";
    $farsi_string = iconv("UTF-8", "CP1256", $string); // Convert from UTF-8 to Farsi (CP1256)
    echo $farsi_string; // Output: کارنامه‌بردار 2
    return $farsi_string;


    return;
    $role = Role::with('permisions')->find(2);


    return $role;

    $role = Role::find(1);
    $role->permisions()->sync([1, 3, 5, 6]);
    return "done";
});



Route::get('/test/login', function () {
    return Auth::loginUsingId(1);
});

Route::get('/test/logout', function () {
    return Auth::logout();
});
Route::get('/test/user', function () {
    return Auth::user();
});


Route::get('/test/licence', function () {
    return $callStatsLicense   = Licence::where('app', 'irouting')->first();
});
