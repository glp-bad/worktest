<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
    ];


	public function handle($request, Closure $next)
	{

		if (env('VUE_APP_ENV') == 'vueClient')
		{
			return $next($request);
		}

		return parent::handle($request, $next);
	}



    /*
		public function handle($request, Closure $next)
		{

			if ($request->is('api/*'))
			{
				return $next($request);
			}

			return parent::handle($request, $next);
		}
    */
}
