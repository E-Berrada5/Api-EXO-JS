<?php

header("Access-Control-Allow-Origin : *");
$name = $_GET['name'];
if (!empty ($name)) {
    $reponse = [
        "status" => true,
        "name" => $name
    ];
} else {
    $reponse = [
        "status" => false,
        "name" => " Anonymous"
    ];
}
echo json_encode ($reponse);