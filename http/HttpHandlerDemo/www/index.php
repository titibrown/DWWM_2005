<?php 

require dirname(__DIR__).'/Http.php';
require dirname(__DIR__).'/Router.php';

use HttpHandlerDemo\Http;
use HttpHandlerDemo\Route;

$route = Route::get();

switch($route->getMethod())
{
    case 'get':
        // do some stuff
    break;
    case 'post':
        // do some stuff
    break;
    case 'put':
        // do some stuff
    break;
    case 'delete':
        // do some stuff
    break;
    default:
        // raise error
    break;
}
