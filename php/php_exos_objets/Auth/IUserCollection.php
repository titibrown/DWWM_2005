<?php 


interface IUserCollection
{
    public function login(string $_username, string $_password) : bool;

    public function getLoggedUser() : ?FakeUser;
}