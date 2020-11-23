<?php 
ini_set("date.timezone", "Europe/Paris");

require 'Personne.php';

try 
{
    $datedenaissance = new DateTime('1981-11-12 21:50');

    // var_export($datedenaissance);
    
    $tim = new Personne('Brown', 'Tim', $datedenaissance);
    
    
    echo $tim->getAge();
    
    echo "\n";
    
    echo $tim->setNom("White")->getNom();
    
    echo "\n";
    
    var_export($tim);
}
catch(Exception $ex)
{
    echo 'Erreur: '. $ex->getMessage();
    echo "\n";
}

