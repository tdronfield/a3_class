<?php
// this is going to act as a catch-all file

    // import other modules to use 
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        // get one item from the database based on what was clicked
        // asked for in the UI
        $targetID = $_GET["id"];
        $result = getSingleUser($pdo, $targetID);

        return $result;
    } else {
        // user must want to see all items in the database
        $allUsers = getAllUsers($pdo);

        return $allUsers;
        }

    