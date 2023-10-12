<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Personas>
 */
class PersonasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    return [
        'primernombre' => $this->faker->firstName(),
        'segundonombre' => $this->faker->firstName(),
        'primerapellido' => $this->faker->lastName(),
        'segundoapellido' => $this->faker->lastName(),
        'fechacreacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
        'fechamodificacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
        'usuariocreacion' => $this->faker->userName(),
        'usuariomodificacion' => $this->faker->userName(),
    ];
}

}
