<?php

namespace Database\Seeders;

use App\Models\Paginas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaginasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Paginas::factory()->count(10)->create(); 
    }
}
