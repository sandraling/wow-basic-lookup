<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CharacterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$no_symbol_or_whitespace = '[^*|\":<>[\]{}`\\()\';@&$|\s]';

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get(
    '/character/{characterName}/{realm}/{region}', 
    [CharacterController::class, 'lookup'
])
->where([
    'characterName' => $no_symbol_or_whitespace . '{2,12}', 
    'realm' => $no_symbol_or_whitespace . '+', 
    'region' => $no_symbol_or_whitespace . '+'
]);