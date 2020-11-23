<?php 

require 'Moteur.php';
require 'Voiture.php';

$moteur = new Moteur();

$v1 = new Voiture($moteur);
$v2 = new Voiture($moteur);

$v2 = new Voiture('Renault', 'megane', 1000, new Moteur('Renault', 320));