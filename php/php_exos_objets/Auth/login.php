<?php
if(!empty($_POST['username']) && !empty($_POST['password'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    require 'Users.php';

    $users = new Users();

    $user = $users->getUserByName($username);

    if($user === null) {
        echo 'Utilisateur inconnu !';
    }
    else {
        if($user->login($password) === true) {
            echo $user->getUsername().' connecté avec succès';
        }
        else {
            echo 'Mot de passe incorrect';
        }
    }
}
?>
<form method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Valider</button>
</form>