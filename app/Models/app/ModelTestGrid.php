<?php
/**
 * Created by PhpStorm.
 * User: paul
 * Date: 15.12.2021
 * Time: 11:01
 */

namespace App\Models\app;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\helpers\response\SqlMessageResponse;
use App\MyAppConstants;

class ModelTestGrid extends Model {

	protected $primaryKey = 'id';

	static public function updateData($request){
		$id = $request->id;
		$nume = $request->name;
		$descriere = $request->description;
		$actionType = $request->actionType;

		$sqlMsg = new SqlMessageResponse(false,0,"");

		if($actionType == MyAppConstants::CLIENT_SQL_DELETE){
			try {
				DB::delete('delete from test_grid_data  where id = ?', [$id]);
			}
			catch (\Illuminate\Database\QueryException $ex) {
				$sqlMsg->messages = "Inregistrarea nu poate fi stearsa !!!";
				$sqlMsg->errorMsg = $ex->getMessage();
				return $sqlMsg;
			}

			$sqlMsg->lastId = -1;
			$sqlMsg->succes = true;
			$sqlMsg->messages = "Inregistrarea a fost stearsa";

		}


		if($actionType == MyAppConstants::CLIENT_SQL_UPDATE) {
			try {
				DB::update('update test_grid_data set name = ?, description=? where id = ?', [$nume, $descriere, $id]);
			}
			catch (\Illuminate\Database\QueryException $ex) {
				$sqlMsg->messages = "Datele nu pot fi modificate !!!!";
				$sqlMsg->errorMsg = $ex->getMessage();
				return $sqlMsg;
			}
			$sqlMsg->lastId = $id;
			$sqlMsg->succes = true;
			$sqlMsg->messages = "Datele au fost modificate";
		}




		return $sqlMsg;
	}

	static public function getData($gridSet){
		$paginate = $gridSet->getPaginate();
		$orderBy  = $gridSet->getOrder();
		$filterBy = $gridSet->getFilter();

		/*
		 * $limitId = 99;
		$count = DB::select(
			'select count(*) as c from test_grid_data where :filterBy' ,
			['filterBy'=> $filterBy]
		);
		*/

		if(!empty($filterBy)){
			$filterBy = ' where ' . $filterBy;
		}

		$count = DB::select(
			"select count(*) as c from test_grid_data $filterBy"
		);

		$dataWithPaginate = ['paginate'=>['records'=>$count[0]->c], 'records'=>null ];


		$pageNumber = $paginate['offsetPage'];
		$perPage = $paginate['perPage'];

		$rezult = DB::select(
			"select * from test_grid_data $filterBy order by $orderBy  LIMIT $perPage OFFSET $pageNumber;"
		);


		/*
        $rezult = DB::select(
            "select * from test_grid_data;"
        );
		*/


		$dataWithPaginate['records'] = $rezult;

		// dd($dataWithPaginate);

		return $dataWithPaginate;

		/*
			return $model->hydrate(
				DB::select(
					'select * from test_grid_data where id < :id order by :obyId desc' ,
					['id'=> 99, 'obyId' => 'id']
				)
			);
		*/

	}


	static public function getDataPaginate($nPage){
		$model = new TestGrid();

		$recordNumber = 0;

		$model->hydrate(
			DB::select(
				'select count() from test_grid_data where id < :id',
				['id'=> 99]
			)
		);

		return $model->hydrate(
			DB::select(
				'select * from test_grid_data where id < :id',
				['id'=> 99]
			)
		);
	}




}
