<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SettingsApp extends Model
{
	protected $primaryKey = 'lang';
	protected $table = 'settings';
	public $timestamps = false;
}
