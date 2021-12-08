<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\App\TestSearchController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {    return view('welcome');});


Route::post('app/login', [LoginController::class, 'login']);
// Route::post('app/logout',            'Auth\LoginController@logout'                       )->middleware('auth');
Route::post('app/logout', [LoginController::class, 'logout'] )->middleware('auth');

// Route::get('/*','App\TestHomeAccesController@ha');
// Auth::routes();
// Route::post('app/searchOnTable','App\Http\Controller\App\TestSearchController@getDataSearch');
// Route::post('app/searchOnTable','App\TestSearchController@getDataSearch');
Route::post('app/searchOnTable', [TestSearchController::class, 'getDataSearch']);
Route::post('app/gridDataTest', [TestSearchController::class, 'getGridDataTest']);


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
