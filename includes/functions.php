<?php
// result will store the database request results 
//so that we can encode and return them to index.php

   $result = array();

   function getAllUsers($conn) {
        // include("connect.php");  // like a JS import statement

        $query = "SELECT * FROM profdata";

        $runQuery = $conn->query($query);

        // go through database by row, then store that data into result array
        // PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo(json_encode($result));
        // on windows, use echo
        // otherwise, may use return
   }

   
   function getSingleUser($conn, $id) {
        // include("connect.php");  // like a JS import statement

        $query = "SELECT * FROM profdata WHERE id=" . $id . "";

        $runQuery = $pdo->query($query);

        // go through database by row, then store that data into result array
        // PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
    }

    //return $result;
    echo(json_encode($result));
    // on windows, use echo
    // otherwise, may use return

   }