<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permision extends Model
{
    protected $fillable = ['name', 'label'];

    public function roles()
    {
        return $this->belongsToMany('App\Role', 'role_permision', 'permision_id', 'role_id');
    }
}
