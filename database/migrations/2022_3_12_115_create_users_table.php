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

            $table->string('mobile')->nullable();
            $table->string('internal_tel')->nullable();
            $table->string('tel')->nullable();
            $table->string('email')->nullable();

            $table->string('user_name')->nullable();
            $table->string('password')->nullable();

            $table->string('queues_available')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::connection('mysql3')->dropIfExists('users');
    }
}
