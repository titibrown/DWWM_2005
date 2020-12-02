<?php 


class RealUsers implements IUserCollection
{
    public function login(string $_username, string $_password) : bool
    {
        return true;
    }

    public function getLoggedUser() : ?RealUSer
    {
        return new RealUser("", "");
    }
}