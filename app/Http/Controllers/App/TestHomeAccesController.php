<?php
/**
 * Created by PhpStorm.
 * User: paul
 * Date: 25.02.2020
 * Time: 09:37
 */

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use \Illuminate\Http\Request;

class TestHomeAccesController extends Controller {

	public function ha(Request $request)
	{
		return "de la gavrila din controller";
	}


}

