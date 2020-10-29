<?php
// include the file we just wrote - connect
    include("connect.php");  // like a JS import statement

    $query = "SELECT * FROM profdata";

    $runQuery = $pdo->query($query);

    $result = array();

    // go through database by row, then store that data into result array
    // PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set
    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    //return $result;
    echo(json_encode($result));
    // on windows, use echo
    // otherwise, may use return
