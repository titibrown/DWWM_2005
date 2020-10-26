<html>
    <head>
        <meta charset="utf-8">
        <title>Users</title>
    </head>
    <body>
        <h1>Utilisateurs</h1>

        <?php 
            // Data Source Name = Chaine de connexion 
            $dsn = 'mysql:host=localhost;port=3306;dbname=db_users_simple;charset=utf8';

            /** @var PDO $dbConnect */
            $dbConnect = new PDO($dsn, 'root', '');

            /**
             * CONSIGNES :
             * 
             * Si le paramètre 'id' est fourni dans l'url: 
             *      Afficher l'utilisateur correspondant à l'id fourni
             *      Afficher 'aucun résultat' si aucun utilisateur trouvé
             * Sinon
             *      Afficher tous les utilisateurs
             * 
             */

        ?>


    </body>
</html>