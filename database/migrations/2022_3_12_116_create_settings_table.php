<?php

use App\SettingsApp;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::connection('mysql3')->create('settings', function (Blueprint $table) {
			$table->string('lang');
			$table->string('dir');
		});

		$newRow = new SettingsApp;
		$newRow->lang = 'fa';
		$newRow->dir = 'rtl';
		$newRow->save();
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::connection('mysql3')->dropIfExists('settings');
	}
}
