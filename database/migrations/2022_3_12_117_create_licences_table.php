<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateLicencesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::connection('mysql3')->create('licences', function (Blueprint $table) {
			$table->increments('id');

			$table->string('app_id');
			/**the unique app id , this will check with the app */
			$table->string('app_name');

			/**the app enum name */
			$table->string('app');
			/**this will show to user */
			$table->string('app_verions');
			/**this will show to user */
			$table->enum('status', ['success', 'failed'])->default('failed');
			/**this will show to user */
			$table->text('licence');

			/**customer name */
			$table->string('customer_name')->nullable();

			/**company name */
			$table->string('company_name')->nullable();
			
			$table->enum('type', ['full', 'trial' , 'lite']);

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::connection('mysql3')->dropIfExists('licences');

	}
}
