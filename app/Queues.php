<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Queues extends Model
{
	protected $connection = 'mysql2';

	protected $table = 'queues_config';
}
