<?php
/**
 * BOOTSTRAP.PHP
 * Initialisation des composants de l'application MVC
 */


require ('Router.php');
require (__DIR__.'/Models/DbConnection.php');
require (__DIR__.'/Models/User.php');
require (__DIR__.'/Models/Users.php');

/**
 * Fonction d'autochargement de classes
 * @param string $_classname Le nom de la classe à charger
 * @return bool true si la classe a été chargée correctement, false sinon.
 */
function autoload(string $_classname)
{

}

/** 
 * @var Router $router Initialisation de la classe Router
 */
$router = new Router('/users_simple/');