<?php 

class User 
{
    /** @var string $username Nom d'utilisateur */
    private string $username;

     /** @var string $password mot de passe (chiffré) de l'utilisateur */
    private string $password;


    /**
     * Initialisation d'un utilisateur
     * @param string $_username le nom d'utilisateur
     * @param string $_password le mot de passe de l'utilisateur (sera directement chiffré)
     */
    public function __construct(string $_username, string $_password)
    {
        $this->username = $_username;

        // password_hash : chiffre un mot de passe
        $this->password = password_hash($_password, PASSWORD_BCRYPT);
    }

    /**
     * Vérifie si le mot de passe fourni en argument correspond au mot de passe de l'utilisateur
     * @param string $_password le mot de passe à tester
     * @return bool true si le mot de passe correspond, sinon false
     */
    public function login(string $_password)
    {
        // password_verify: vérifie qu'un mot de passe en clair correspond au mot de passe chiffré
        if(password_verify($_password, $this->password)) {
            return true;
        }

        return false;
    }

    /**
     * @return string Le nom de l'utilisateur courant
     */ 
    public function getUsername(): string
    {
        return $this->username;
    }
}