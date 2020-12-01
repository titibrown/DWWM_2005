<?php 

require 'User.php';

class Users 
{
    /** @var User[] $users */
    private array $users;


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

    public function getUserByName(string $_username) : ?User
    {
        foreach($this->users as $user) {
            if($_username === $user->getUsername()) {
                return $user;
            }
        }

        return null;
    }
}

/*$users = new Users();

var_export($users);*/


