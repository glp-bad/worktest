<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\App\TestSearchController;
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

// Route::get('/*','App\TestHomeAccesController@ha');

Auth::routes();
// Route::post('app/searchOnTable','App\Http\Controller\App\TestSearchController@getDataSearch');
// Route::post('app/searchOnTable','App\TestSearchController@getDataSearch');
Route::post('app/searchOnTable', [TestSearchController::class, 'getDataSearch']);
