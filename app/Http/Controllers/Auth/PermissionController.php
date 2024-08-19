<?php

namespace App\Http\Controllers\Auth;

use App\GroupPermision;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Licence;
use App\Permision;
use App\Role;
use Illuminate\Support\Facades\Auth;

class PermissionController extends Controller
{
    public function action(Request $request)
    {
        $method = $request->method;

        /** -------------------------- Start check Permission -------------------------- */
        $licenceName = null;
        switch ($method) {
            case 'submitUpdate':
                if ($request->id == "1") $licenceName = 'error';
                else $licenceName = 'auth.permission.edit';
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
            case 'getAllPermission':
                $res  = $this->getAllPermission($request);
                break;
            case 'getCurrentPermission':
                $res = $this->getCurrentPermission($request);
                break;
            case 'submitUpdate':
                $res = $this->submitUpdate($request);
                break;
            case 'getPermission':
                $res = $this->getPermission();
                break;
            default:
                $res = [
                    'status' => 500,
                    'message' => 'no command found'
                ];
        }
        return response()->json($res, $res['status']);
    }
    /** getData for main page core permission (page browse) ... */
    public function getData($request)
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

    /** return list permission */
    public function getAllPermission($request)
    {
        try {
            $permissions = GroupPermision::with('permissions')->get();

            return [
                'status' => 200, 'message' => 'success',
                'data' => $permissions
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 200,
                'message' => $th->getMessage()
            ];
        }
    }

    /** return current permission special role */
    public function getCurrentPermission($request)
    {
        try {
            $currentPermissions = Role::with('permisions')->find($request->id);
            return [
                'status' => 200, 'message' => 'success',
                'data' => $currentPermissions
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 200,
                'message' => $th->getMessage()
            ];
        }
    }

    /** fun submit btn edit */
    public function submitUpdate($request)
    {
        try {

            $role = Role::find($request->id);
            $permission = [];
            foreach ($request->permission as $activatedPermission) {
                $permission[] = $activatedPermission['id'];
            }

            $role->permisions()->sync($permission);
            return [
                'status' => 200,
                'message' => 'success',
                'data' => $permission,
            ];
        } catch (\Throwable $th) {
            return [
                'status' => 500,
                'message' => 'faild',
                'error' => $th->getMessage()
            ];
        }
    }

    /** return current permission  */
    public function getPermission()
    {
        try {

            $permissions =  Role::with('permisions')->find(Auth::user()->role_id);
            $licence = Licence::all();
            return [
                'status' => 200, 'message' => 'success',
                'permissions' => $permissions->permisions,
                'licence' => $licence
            ];
        } catch (\Throwable $th) {
            return ['status' => 500, 'message' => $th->getMessage()];
        }
    }
}
