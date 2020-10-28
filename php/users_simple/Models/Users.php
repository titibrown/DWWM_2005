<?php
/**
 * Classe d'accès aux données
 * Contient la logique d'interaction avec la table "users" (requêtes SQL)
 */
class Users 
{
    /** @var PDO $pdo La connexion PDO à utiliser */
    private PDO $pdo;


    /**
     * Initialise une nouvelle instance de la classe Users
     */
    public function __construct()
    {
        // On récupère la connexion PDO à partir de la classe DbConnection
        $this->pdo = DbConnection::getDb();
    }

    /**
     * Retourne tous les utilisateurs
     * @return array Tous les utilisateurs
     */
    public function findAll() : array
    {
        $statement = $this->pdo->query("SELECT * FROM users");

        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Retourne l'utilisateur possédant l'id "$id"
     * Si aucun résultat, retourne false
     * @return array|false l'utilisateur trouvé ou false si aucun utilisateur correspondant
     */
    public function find(int $id)
    {
        $statement = $this->pdo->prepare("SELECT * FROM users WHERE user_id=:id");

        $values = [
            ':id' => $id
        ];

        if($statement->execute($values)) {
            $user = $statement->fetch(PDO::FETCH_ASSOC);
        }
        else {
            $user = false;
        }

        $statement->closeCursor(); 

        return $user;
    }

    /*public function findBy($col, $val)
    {
        return false;
    }*/
}
