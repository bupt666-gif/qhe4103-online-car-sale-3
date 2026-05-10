<?php
$databaseHost = '127.0.0.1';
$databaseUser = 'root';
$databasePassword = 'root';
$databaseName = 'online_car_sale';
$databasePort = 8889;

$conn = new mysqli(
    $databaseHost,
    $databaseUser,
    $databasePassword,
    $databaseName,
    $databasePort
);

if ($conn->connect_error) {
    die('Database connection failed: ' . htmlspecialchars($conn->connect_error));
}

$conn->set_charset('utf8mb4');