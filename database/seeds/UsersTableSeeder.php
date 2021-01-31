<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'yaser',
            'email' => 'yaser@gmail.com',
            'password' => bcrypt('123456'),
        ]);
        User::create([
            'name' => 'mehran',
            'email' => 'mehran@gmail.com',
            'password' => bcrypt('123456'),
        ]);
    }
}
