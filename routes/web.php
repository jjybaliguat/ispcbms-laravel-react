<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use GlennRaya\Xendivel\Xendivel;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function(){
        return Inertia::render('dashboard/Dashboard');
    })->name('dashboard');
    Route::get('/customer', function(){
        return Inertia::render('dashboard/Customer');
    })->name('customer');
    Route::get('/coverage', function(){
        return Inertia::render('dashboard/Coverage');
    })->name('coverage');
    Route::get('/invoice', function(){
        return Inertia::render('dashboard/Invoice');
    })->name('invoice');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('dashboard/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/checkout', function(){
    return Inertia::render('vendor/xendivel/Checkout');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/pay-via-ewallet', function (Request $request) {
    $response = Xendivel::payWithEwallet($request)
        ->getResponse();

    return $response;
});

require __DIR__.'/auth.php';
