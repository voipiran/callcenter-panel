<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    public function up()
    {
        // roles table
        Schema::connection('mysql3')->create('roles', function (Blueprint $table) {
			$table->increments('id');
            $table->string('name');
            $table->timestamps();
        });

        // role_permision table
        Schema::connection('mysql3')->create('role_permision', function (Blueprint $table) {
            $table->integer('role_id')->unsigned();
            $table->index('role_id');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete("cascade");

			$table->integer("permision_id")->unsigned();
            $table->index('permision_id');
            $table->foreign('permision_id')->references('id')->on('permisions')->onDelete("cascade");
        });
    }

    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('roles');
        Schema::connection('mysql3')->dropIfExists('role_permision');
    }
}
