<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'rank',
        'image',
        'updated_at',
        'created_at',
    ];

    protected $attributes = [
        'name' => '',
        'description' => '',
        'price' => 100,
        'stock' => 0,
        'rank' => 0,
        'image' => '',
    ];
}
