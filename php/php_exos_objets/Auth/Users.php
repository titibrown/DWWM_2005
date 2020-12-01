<?php 
/**
 * Classe Users
 * Simule une base de données d'utilisateurs
 */
class Users 
{
    /** @var User[] $users les utilisateurs */
    private array $users;


    /**
     * Initalisation de la collection d'utilisateurs
     */
    public function __construct()
    {
        $this->users = [
            new User('Tim', 'azer'),
            new User('Reda', 'azer'),
            new User('Jon', 'azer'),
            new User('Daoud', 'azer'),
            new User('Mike', 'azer'),
        ];
    }

    /**
     * Recherche un utilisateur par son username
     * @param string $_username le nom d'utilisateur à rechercher
     * @return User|null l'utilisateur trouvé ou null si aucun utilisateur correspondant trouvé
     */
    public function getUserByName(string $_username) : ?User
    {
        // parcours de la collection d'utilisateurs
        foreach($this->users as $user) {
            // si les username correspodent
            if($_username === $user->getUsername()) {
                return $user;
            }
        }

        return null;
    }
}

/*$users = new Users();

var_export($users->getUserByName('Toto'));

//var_export($users);
*/

