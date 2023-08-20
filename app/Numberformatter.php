<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Numberformatter extends Model
{

	protected $connection="mysql6";
	protected $table = 'settings';

	public $timestamps = false;
	protected $primaryKey = "name";
}
