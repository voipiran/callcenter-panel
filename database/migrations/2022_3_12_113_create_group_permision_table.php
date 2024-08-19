<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateGroupPermisionTable extends Migration
{
    public function up()
    {
        Schema::connection('mysql3')->create('group_permision', function (Blueprint $table) {
			$table->unsignedBigInteger('id');
            $table->string('label');
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('permisions');
    }
}
