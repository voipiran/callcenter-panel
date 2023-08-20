<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreatePermisionsTable extends Migration
{
    public function up()
    {
        Schema::connection('mysql3')->create('permisions', function (Blueprint $table) {
			$table->increments('id');
            $table->string('name');
            $table->string('label');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('permisions');
    }
}
