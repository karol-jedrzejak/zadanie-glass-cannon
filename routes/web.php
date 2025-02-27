<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductsApiController;

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/api/products', [ProductsApiController::class, 'index'])->name('api.products.index');
//Route::get('/products/preview', [ProductsController::class, 'preview'])->name('products.preview');
Route::resource('products', ProductsController::class)->only(['index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/api/products', [ProductsApiController::class, 'store'])->name('api.products.store');
    Route::get('/api/products/{id}', [ProductsApiController::class, 'show'])->name('api.products.show');
    Route::put('/api/products/{id}', [ProductsApiController::class, 'update'])->name('api.products.update');
    Route::delete('/api/products/{id}', [ProductsApiController::class, 'destroy'])->name('api.products.destroy');

    Route::resource('products', ProductsController::class)->only([
        'show',
        'create',
        'edit'
    ]);
});

require __DIR__ . '/auth.php';
