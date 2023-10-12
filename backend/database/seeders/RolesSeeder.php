<?php

namespace Database\Seeders;

use App\Models\Roles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Usar el factory para crear un registro "admin"
        Roles::factory()->create(['rol' => 'admin']);

        // Usar el factory para crear un registro "usuario"
        Roles::factory()->create(['rol' => 'usuario']);
    }
}
