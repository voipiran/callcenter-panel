<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermisionSeeder extends Seeder
{
    public function run()
    {
        DB::table('permisions')->insert([
            'name' => 'John Doe',
            'label' => 'johndoe@example.com'
        ]);
    }
}