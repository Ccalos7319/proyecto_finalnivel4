<?php

use App\Http\Controllers\BitacorasController;
use App\Http\Controllers\EnlacesController;
use App\Http\Controllers\PaginasController;
use App\Http\Controllers\PersonasController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsuariosController;
use App\Models\Bitacoras;
use App\Models\Enlaces;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(PersonasController::class)->group(function () {
    Route::get('/personas', 'index');
    Route::get('/personas/{id}', 'show');
    Route::post('/personas', 'create');
    Route::put('/personas/{id}', 'update');
    Route::delete('/personas/{id}', 'destroy');
});

Route::controller(RolesController::class)->group(function () {
    Route::get('/roles', 'index');
    Route::get('/roles/{id}', 'show');
    Route::post('/roles', 'create');
    Route::put('/roles/{id}', 'update');
    Route::delete('/roles/{id}', 'destroy');
});

Route::controller(PaginasController::class)->group(function () {
    Route::get('/paginas', 'index');
    Route::get('/paginas/{id}', 'show');
    Route::post('/paginas', 'create');
    Route::put('/paginas/{id}', 'update');
    Route::delete('/paginas/{id}', 'destroy');
});

Route::controller(BitacorasController::class)->group(function () {
    Route::get('/bitacoras', 'index');
    Route::get('/bitacoras/{id}', 'show');
    Route::post('/bitacoras', 'create');
    Route::put('/bitacoras/{id}', 'update');
    Route::delete('/bitacoras/{id}', 'destroy');
});

Route::controller(UsuariosController::class)->group(function () {
    Route::get('/usuarios', 'index');
    Route::get('/usuarios/{id}', 'show');
    Route::post('/usuarios', 'create');
    Route::put('/usuarios/{id}', 'update');
    Route::delete('/usuarios/{id}', 'destroy');
});

Route::controller(EnlacesController::class)->group(function () {
    Route::get('/enlaces', 'index');
    Route::get('/enlaces/{id}', 'show');
    Route::post('/enlaces', 'create');
    Route::put('/enlaces/{id}', 'update');
    Route::delete('/enlaces/{id}', 'destroy');
});