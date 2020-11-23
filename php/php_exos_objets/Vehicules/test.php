<?php 

require 'Moteur.php';
require 'Voiture.php';


/**
 * AGGREGATION
 * Création d'un moteur partagé 
 * Ajout du même Moteur à 2 Voitures différentes
 */

$moteur = new Moteur();

$v1 = new Voiture($moteur);

$v2 = new Voiture($moteur);





/** COMPOSITION 
 * L'instance du Moteur est directement créée dans le constructeur de la Voiture
 * Chaque Voiture possède son propre Moteur
*/

$v2 = new Voiture(new Moteur());