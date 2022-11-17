<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes(['register' => false]);

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name(
    'home'
);

Route::resource(
    'tickets',
    \App\Http\Controllers\TicketController::class
)->parameters(['tickets' => 'ticket:ticket_string']);

Route::get('/ticket/download/{ticket}', [
    \App\Http\Controllers\TicketController::class,
    'download',
])->name('ticket.download');

Route::get('/check', [
    \App\Http\Controllers\TicketController::class,
    'check',
])->name('check');

Route::post('/test', [
    \App\Http\Controllers\TicketController::class,
    'test_and_use',
])->name('test');
