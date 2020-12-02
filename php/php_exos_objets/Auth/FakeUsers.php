<?php 

require_once 'IUserCollection.php';
/**
 * Classe Users
 * Simule une base de données d'utilisateurs
 */
class FakeUsers implements IUserCollection
{
    /** @var FakeUser[] $users les utilisateurs */
    private array $users;

    private ?FakeUser $loggedUser;

    /**
     * Initalisation de la collection d'utilisateurs
     */
    public function __construct()
    {
        $this->users = [
            new FakeUser('Tim', 'azer'),
            new FakeUser('Reda', 'azer'),
            new FakeUser('Jon', 'azer'),
            new FakeUser('Daoud', 'azer'),
            new FakeUser('Mike', 'azer'),
        ];

        $this->loggedUser = null;
    }

    /**
     * Recherche un utilisateur par son username
     * @param string $_username le nom d'utilisateur à rechercher
     * @return FakeUser|null l'utilisateur trouvé ou null si aucun utilisateur correspondant trouvé
     */
    public function getUserByName(string $_username) : ?FakeUser
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


    public function login(string $_username, string $_password) : bool
    {
        $user = $this->getUserByName($_username);

        // si l'utilisateur existe
        if($user !== null) {
            // si le mot de passe est correct
            if($user->login($_password) === true) {
                $this->loggedUser = $user;
                return true;
            }
        }

        return false;
    }

    public function getLoggedUser() : ?FakeUser
    {
        return $this->loggedUser;
    }
}

/*$users = new Users();

var_export($users->getUserByName('Toto'));

//var_export($users);
*/

