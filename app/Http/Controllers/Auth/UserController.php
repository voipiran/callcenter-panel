<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Role;
use App\SettingsApp;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function action(Request $request)
    {
        $method = $request->method;


        /** -------------------------- Start check Permission -------------------------- */
        $licenceName = null;
        switch ($method) {
            case 'submitUpdate':
                if (!$request->id) $licenceName = 'auth.users.add';
                break;
            case 'remove':
                $licenceName = 'auth.users.remove';
                break;
        }

        /** check permission
         * if not permission return 403 else skip
         */
        if ($Inaccessibility = checkFotInaccessibility($licenceName)) {
            return $Inaccessibility;
        }
        /** -------------------------- End check Permission -------------------------- */

        switch ($method) {

            case 'getData':
                $res  = $this->getData($request);
                break;
            case 'findData':
                $res = $this->findData($request);
                break;
            case 'submitUpdate':
                $res = $this->submitUpdate($request);
                break;
            case 'remove':
                $res = $this->remove($request);
                break;
            case 'getRolesOption':
                $res = $this->getRolesOption();
                break;
            default:
                $res = [
                    'status' => 500,
                    'message' => 'no command found'
                ];
        }
        return response()->json($res, $res['status']);
    }
    /** getData for main page core survey (page browse) ... */
    public function getData($request)
    {
        try {
            if (Auth::user()->id == 1)
                $data = User::with('roles')->get();
            else if (Auth::user()->role_id == 1)
                $data = User::with('roles')->where('id', '!=', 1)->get();
            else
                $data = User::with('roles')->where('id', Auth::user()->id)->get();

            return [
                'status' => 200,
                'message' => 'success',
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }

    /** return all roles */
    public function getRolesOption()
    {
        try {
            $data = Role::all();

            return [
                'status' => 200,
                'message' => 'success',
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }

    /** find recored for edit */
    public function findData($request)
    {
        try {
            if (Auth::user()->role_id == 1 && $request->id)
                $data = User::find($request->id);
            else
                $data = User::find(Auth::user()->id);

            return [
                'status' => 200,
                'message' => 'success',
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }
    /** fun submit btn edit */
    public function submitUpdate($request)
    {
        try {
            $data = new User();
            if ($request->id) {
                if (Auth::user()->role_id == 1)
                    $data = User::find($request->id);
                else
                    $data = User::find(Auth::user()->id);
            }

            $data->full_name = $request->full_name;
            $data->role_id = $request->role_id;
            $data->user_name = $request->user_name;
            $data->mobile = $request->mobile;
            $data->tel = $request->tel;
            $data->internal_tel = $request->internal_tel;
            $data->email = $request->email;

            if ($request->password) {
                $password =  $request->password;
                $hashedPassword = Hash::make($password);
                $data->password = $hashedPassword;
            }

            $data->save();

            return [
                'status' => 200,
                'message' => 'success',
                'data' => $data,
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }

    /** delete record */
    public function remove($request)
    {
        try {
            /** dont permission for remove admin */
            if ($request->id == 1 || $request->id == Auth::user()->id) {
                return [
                    'status' => 500,
                    'message' => 'You cannot delete the user',
                ];
            }

            $user = User::find($request->id);
            $user->delete();
            return [
                'status' => 200,
                'message' => 'success',
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }
}
