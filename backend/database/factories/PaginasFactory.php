<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Paginas>
 */
class PaginasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fechacreacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'fechamodificacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'usuariocreacion' => $this->faker->userName,
            'usuariomodificacion' => $this->faker->userName,
            'url' => $this->faker->url,
            'estado' => $this->faker->randomElement(['activo', 'inactivo']),
            'nombre' => $this->faker->word,
            'descripcion' => $this->faker->sentence,
            'icono' => $this->faker->word,
            'tipo' => $this->faker->randomElement(['pagina', 'subpagina']),
        ];
    }
}
