<?php
    $url = $_SERVER['REQUEST_URI'];
    if(isset($_GET['body'])) {
        $body = $_GET['body'];
    }
    echo "<html>";
        include "includes/head.phtml";
        include "includes/header.phtml";

        // Body inclusion
        if(isset($body)) {
            include "includes/body/". $body .".phtml";
        }

        include "includes/footer.phtml";
    echo "</html>";
?>