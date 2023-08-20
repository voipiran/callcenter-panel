<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::connection('mysql3')->create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name');
            
            $table->integer('role_id')->unsigned();
            $table->index('role_id'); // create index on role_id column
            $table->foreign('role_id')->references('id')->on('roles')->onDelete("cascade");

            $table->string('mobile');
            $table->string('internal_tel');
            $table->string('tel');
            $table->string('email');
            
            $table->string('user_name');
            $table->string('password');
            
            $table->rememberToken();
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('users');
    }
}
