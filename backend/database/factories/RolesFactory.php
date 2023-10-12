<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RolesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $roles = ['admin', 'usuario']; // Los dos roles posibles en ese orden

        return [
            'rol' => $roles[$this->faker->numberBetween(0, 1)], // Usar un índice aleatorio (0 o 1)
            'fechacreacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'fechamodificacion' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'usuariocreacion' => $this->faker->userName,
            'usuariomodificacion' => $this->faker->userName,
        ];
    }
}
