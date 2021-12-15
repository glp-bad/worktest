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

use App\Models\app\TestGrid;

class TestSearchController extends Controller {

	public function getData(Request $request)
	{
		return $this->getRezult();
	}

	public function getGridDataTest(Request $request){
		return json_encode($this->getRezultForGrid($request->paginate['pageNumber'],$request->paginate['perPage']));
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

	private function getRezultForGrid($pageNumber, $perPage){

		$rezulset = TestGrid::getData($pageNumber, $perPage);


		/*
		$rezulset = array();
		for ($x = 0; $x <= 100000; $x++) {
			$rezulset[]=['id'=> $x, 'caption' => 'GRID from php app ma duc la piata de ' . $x, "contract" => $x*473];
		}

		// sleep(10);

		*/

		// dd($rezulset);

		return $rezulset;
	}



}

