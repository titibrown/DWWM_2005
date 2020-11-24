<?php
//require 'proc_Personne.php';
?>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        label {
            display: inline-block;
            width: 100px;
        }

        input,
        button {
            width: 200px;
        }

        .form-item {
            margin: 10px;
        }

        button,
        input[type="submit"] {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <h1>Personnes</h1>

    <form action="proc_Personne.php" id="monForm" method="post">

        <div class="form-item">
            <label for="id_nom">Nom: </label>
            <input type="text" name="nom" id="id_nom" value="" placeholder="Saisissez votre nom">
        </div>

        <div class="form-item">
            <label for="id_prenom">Prénom: </label>
            <input type="text" name="prenom" id="id_prenom" value="" placeholder="Saisissez votre prénom" required="required">
        </div>

        <div class="form-item">
            <label for="id_date">Date de naissance: </label>
            <input type="date" name="datenaissance" id="id_date">
        </div>
        <!-- <input type="submit" value="Valider"> -->
        <button type="submit">Valider</button>
    </form>

    <script>
        document.getElementById("monForm").addEventListener('submit', function(event) {

        });
    </script>

</body>

</html>