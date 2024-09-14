<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $user = new \App\Models\User();
        $user->name = 'Admin User';
        $user->email = 'admin@example.com';
        $user->password = bcrypt('password');
        $user->save();
    }
}
