<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
	protected $connection = 'mysql';

	protected $table = 'qevent';
}
