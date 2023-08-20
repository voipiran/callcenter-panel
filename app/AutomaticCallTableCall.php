<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AutomaticCallTableCall extends Model
{
	protected $connection = 'mysql7';

	protected $table = 'calls';

	public $timestamps = false;
}
