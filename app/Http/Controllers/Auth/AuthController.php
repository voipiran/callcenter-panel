<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\SettingsApp;
use App\User;
use Illuminate\Support\Facades\Lang;

class AuthController extends Controller
{
    public function getLogin()
    {
        $setting = SettingsApp::first();

        $aboutMe = Lang::get('aboutMe');

        return view('auth.login', ['locale_lang' =>  $setting->lang, 'aboutMe' => $aboutMe]);
    }

    public function postLogin(Request $request)
    {

        $credentials = $request->only('user_name', 'password');


        if (Auth::attempt($credentials)) {
            return redirect()->intended('/');
        }

        $data = [
            'message' => 'faild',
            'error' => 'These credentials do not match our records.'
        ];
        return response()->json($data, 500);
    }

    public function getLogout()
    {
        Auth::logout();

        return redirect('/');
    }

  
}
