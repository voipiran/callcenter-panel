<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trunk extends Model
{
	protected $connection = "mysql2";
	protected $table = 'trunks';
}
