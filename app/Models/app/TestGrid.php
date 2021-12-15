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

class TestGrid extends Model{

	protected $primaryKey = 'id';

	static public function getData($pageNumber, $perPage){
		// $model = new TestGrid();

		// dd($pageNumber, $perPage);

		$limitId = 30;

		$count = DB::select(
			'select count(*) as c from test_grid_data where id < :id' ,
			['id'=> $limitId]
		);

		$dataWithPaginate = ['paginate'=>['records'=>$count[0]->c], 'records'=>null ];


		$pageNumber = ($pageNumber-1) * $perPage;
		$rezult = DB::select(
			"select * from test_grid_data where id < :id order by id desc  LIMIT $perPage OFFSET $pageNumber;" ,
			['id'=> $limitId]
		);

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