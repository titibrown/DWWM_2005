<html>
<head>
    <meta charset="utf-8">
    <title>Users</title>
</head>
<body>
    <h1>Utilisateurs</h1>

    <?php 
    /**
     * CONSIGNES :
     * 
     * Adaptez le code et utilisez les classes du dossier Models.
     * Utilisez l'exemple dans user_v2.php pour vous aider.
     * 
     */

    // Data Source Name = Chaine de connexion 
    $dsn = 'mysql:host=localhost;port=3306;dbname=db_users_simple;charset=utf8';

    /** @var PDO $dbConnect */
    $dbConnect = new PDO($dsn, 'root', '');

    $id = $_GET['id'] ?? 0;

    $id = intval($id);

    if ($id > 0) {
        // Afficher 1 utilisateur

        $statement = $dbConnect->query("SELECT * FROM users WHERE user_id=$id");

        $user = $statement->fetch(PDO::FETCH_ASSOC);

        if (!empty($user)) {
            echo $user['user_name'];
        } else {
            echo 'Aucun résultat';
        }
    } else {
        // Afficher tous les utilisateurs
        
        $statement = $dbConnect->query("SELECT * FROM users");

        while(false !== ($user = $statement->fetch())) {

            echo '<h2>' . $user['user_name'] . '</h2>';
            echo $user['user_email'];
            echo '<hr>';

        }
    }

    ?>

</body>
</html>