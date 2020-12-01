<?php
require 'Session.php';
Session::isValidUser();

?>
<h1>Espace membres</h1>
<?php echo Session::getUser()->getUsername(); ?>
