<?php
$hostname = '172.31.13.77';
$username = 'bryceyoder_com';
$password = 'somebodyoncetoldme';
$database = 'bryceyoder_com';
$secretkey = 'somebodyoncetoldme';

$conn = new PDO('mysql:host='.$hostname.';dbname='.$database,$username,$password);
$hash = $_GET['hash'];
$realHash = md5($_GET['name'].$_GET['score'].$secretkey);

if ($realHash == $hash && $_GET['name'] != "") {
    $sth = "insert into scores (name, score) values ('".$_GET['name']."', '".$_GET['score']."')";
    $conn->exec($sth);
}
?>
