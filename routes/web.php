<?php

use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [EventController::class, 'index'])
    ->middleware(['auth'])
    ->name('dashboard');

Route::resource('events', EventController::class)
    ->except('index')
    ->middleware(['auth']);

Route::get('/events/{event}/create', [
    EventController::class,
    'createTicket',
])->name('events.tickets.create');

Route::post('/events/{event}/create', [EventController::class, 'storeTicket']);

Route::get('/ticket/{ticket}', [EventController::class, 'showTicket'])->name(
    'ticket.show'
);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name(
        'profile.edit'
    );
    Route::patch('/profile', [ProfileController::class, 'update'])->name(
        'profile.update'
    );
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name(
        'profile.destroy'
    );
});

require __DIR__ . '/auth.php';
