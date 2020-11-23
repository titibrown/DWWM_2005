<?php 


class Voiture 
{
    private Moteur $_moteur;

    public function __contruct(Moteur $newMoteur)
    {
        $this->_moteur = $newMoteur;
    }
}