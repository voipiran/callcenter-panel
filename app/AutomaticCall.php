<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AutomaticCall extends Model
{
	protected $connection = 'mysql7';

	protected $table = 'campaign';

	public $timestamps = false;
}
