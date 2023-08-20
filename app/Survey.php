<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class Survey extends Model
{
	protected $connection = 'mysql8_Survey';
	protected $table = 'survey';

	// public function getAgentNameAttribute($value)
	// {
	// 	return mb_convert_encoding($value, 'Windows-1256', 'UTF-8');
	// }
	// public function toArray()
    // {
    //     $array = parent::toArray();
    //     $array['name'] = $this->getNameAttribute($array['name']);
    //     return $array;
    // }
}
