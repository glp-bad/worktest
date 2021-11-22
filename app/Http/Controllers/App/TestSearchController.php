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

class TestSearchController extends Controller {

	public function getData(Request $request)
	{
		return $this->getRezult();
	}


    public function getDataSearch(Request $request)
    {
        return $this->getRezult();
    }

	private function getRezult(){
		$rezulset = array();
        for ($x = 0; $x <= 4000; $x++) {
            $rezulset[]=['id'=> $x, 'caption' => 'ma duc la piata de ' . $x];
        }

		return $rezulset;
	}


}
