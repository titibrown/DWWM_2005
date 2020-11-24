<?php
// validation du formulaire

require '../Personne.php';
require 'PersonneViewModel.php';

// si un formulaire a été soumis
if ($_POST) {
    // initialisation du ViewModel associé
    // Le ViewModel valide le formulaire soumis (il connait les champ à valider)
    $viewmodel = new PersonneViewModel();


    // Récupération de la Personne créée grâce aux données du formulaire
    $personne = $viewmodel->validate();

    // Affichage des données de l'objet Personne créé dans le ViewModel.
    echo 'Le nom est: ' . $personne->getNom();
    echo '<br>';
    echo $personne->getPrenom();
    echo '<br>';
    echo $personne->getAge();
    echo '<br>';
}
