<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'name' => fake()->unique()->word(),
            'description' => fake()->paragraph(3, false),
            'price' => fake()->randomFloat(2, 0.01, 10000),
            'stock' => fake()->numberBetween(0, 1000),
            'rank' => fake()->numberBetween(1, 100),
            'image' => "https://picsum.photos/id/" . fake()->unique()->numberBetween(1, 100) . "/640/480",
            'created_at' => fake()->dateTimeBetween('-5 years', '-1 day'),
            'updated_at' => fake()->dateTimeBetween('-5 years', '-1 day'),
        ];
    }
}
