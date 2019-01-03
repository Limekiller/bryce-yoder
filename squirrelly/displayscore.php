<?php
$hostname = '172.31.13.77';
$username = 'bryceyoder_com';
$password = 'somebodyoncetoldme';
$database = 'bryceyoder_com';

$conn = new PDO('mysql:host='.$hostname.';dbname='.$database,$username,$password);
$sth = $conn->query('select * from scores order by score desc limit 10');
$sth->setFetchMode(PDO::FETCH_ASSOC);
$result=$sth->fetchAll();

if(count($result)>0) {
    foreach($result as $r) {
        $spaces = 20 - strlen($r['name']);
        $finalstring = str_pad($r['name'], 20);
        echo $finalstring."\r".$r['score']."\n";
    }
}
?>
