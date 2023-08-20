<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;


class RoleController extends Controller
{
    public function action(Request $request)
    {
        $method = $request->method;


        /** -------------------------- Start check Permission -------------------------- */
        $licenceName = null;
        switch ($method) {
            case 'submitUpdate':
                if (!$request->id) $licenceName = 'auth.roles.add';
                else $licenceName = 'auth.roles.edit';
                break;
            case 'remove':
                $licenceName = 'auth.roles.remove';
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
            $data = Role::all();

            // DB::raw("AVG(survey_value)*100)/$max_survey as satisfaction_percentage")

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
            $data = Role::find($request->id);

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
            $data = new Role();
            if ($request->id)
                $data = Role::find($request->id);

            $data->name = $request->name;
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
            $role = Role::find($request->id);
            $role->delete();

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


    /** --------------------------------- End component Users --------------------- */
}
