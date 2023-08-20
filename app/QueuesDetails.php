<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QueuesDetails extends Model
{
	protected $connection = 'mysql2';

	protected $table = 'queues_details';
}
