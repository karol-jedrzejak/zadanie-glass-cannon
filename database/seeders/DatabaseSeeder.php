<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Test User
        \App\Models\User::factory()->create([
            'name' => 'Test Person Name',
            'email' => 'test@test.com',
            'email_verified_at' => now(),
            'password' => Hash::make('test'),
            'remember_token' => Str::random(10),
        ]);

        // Geneerate Users
        \App\Models\User::factory(9)->create();

        // Generate Products
        \App\Models\Products::factory(100)->create();
    }
}
