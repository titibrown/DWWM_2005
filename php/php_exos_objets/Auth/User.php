<?php 

class User 
{
    private string $username;

    private string $password;

    private bool $logged;


    public function __construct(string $_username, string $_password)
    {
        $this->username = $_username;
        $this->password = password_hash($_password, PASSWORD_BCRYPT);
        $this->logged = false;
    }

    public function login(string $_password)
    {
        if(password_verify($_password, $this->password)) {
            $this->logged = true;
        }

        return $this->logged;
    }

    /**
     * Get the value of username
     */ 
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Get the value of logged
     */ 
    public function isLogged() : bool
    {
        return $this->logged;
    }
}