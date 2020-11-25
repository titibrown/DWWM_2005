<?php 

/**
 * Classe Client
 * 
 * Cette classe représente un client.
 * @author DWWM 2005 
 * @version 0.0.1 
 */
class Client extends Personne
{
    /** @var int $id Identifiant du client */
    private int $id;

    /** @var Adresse $adresse Adresse du client */
    private Adresse $adresse;
    
    /**
     * Initialisation d'un client
     * @param int $_id L'identifiant du client
     * @param Adresse $_adresse L'adresse du client
     */
    public function __construct(int $_id, Adresse $_adresse) 
    {
        $this->id = $_id;
        $this->adresse = $_adresse;
    }

}