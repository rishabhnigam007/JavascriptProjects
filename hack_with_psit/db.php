<?php

$servername="localohost";
$username="root";
$password="";
$databasename="s_db";
$conn=mysqli_connect($servername,$username,$password,$databasename);

if(!$conn)
	die("connection not established".mysqli_connect_error());
else
	echo "connected successfully";
?>