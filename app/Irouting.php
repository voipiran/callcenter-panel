<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Irouting extends Model
{
	protected $connection = 'mysql5';
	protected $table = 'settings';
	public $timestamps = false;
}
