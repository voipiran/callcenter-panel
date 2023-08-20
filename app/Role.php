<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];

    public function permisions()
    {
        return $this->belongsToMany('App\Permision', 'role_permision', 'role_id', 'permision_id');
    }
}
