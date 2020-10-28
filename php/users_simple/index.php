<?php
    require 'bootstrap.php';
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
            $page = $_GET['page'] ?? 'home';

            $page = basename($page);

            echo $page;
                        
            $path = "Views/$page.php";

            echo '<br>';
            echo $path;

            if(is_file($path)) {
                require $path;
            }
            else {
                require "Views/404.php";
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