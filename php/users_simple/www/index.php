<?php
    require '../App/bootstrap.php';
?>
<html>
<head>
    <meta charset="utf-8">
    <title>Mon site</title>
</head>

<body>
    <header>
        <h1>Welcome</h1>
    </header>

    <main>
        <?php
            // récupération du paramètre "page" à partir de l'url
            // si aucun paramètre "page", la valeur par défaut sera 'home'
            $page = $_GET['page'] ?? 'home';

            // supression de toute notion de chemin dans $page
            $page = basename($page);

            echo $page;
                    
            // construction du chemin vers un fichier PHP dont le nom correspont à la valeur de $page
            $path = "../App/Views/$page.php";

            echo '<br>';
            echo $path;

            if(is_file($path)) { // si le chemin construit pointe vers un fichier réel
                require $path; // inclusion du fichier correspondant
            }
            else { // fichier non trouvé
                require "../App/Views/404.php"; // inclusion de la page d'erreur
            }

            /*switch($page)
            {
                case 'home':
                    require "Views/home.php";
                break;
                case 'users':
                    require "Views/users.php";
                break;
                case 'roles':
                    require "Views/roles.php";
                break;
                default:
                    require "Views/404.php";
            }*/
        ?>
    </main>

    <footer>
        &copy; Copyright <?=date('Y'); ?> Moi
    </footer>




</body>
</html>