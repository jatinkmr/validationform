<!DOCTYPE html>
<html>
<head>
	<title>Welcome</title>	
	<link rel="stylesheet" type="text/css" href="layout.css">
</head>
<body bgcolor="#00CCFF">
	<h3>Welcome To Home Page</h3>
	<?php
		echo "<h5>Your Name<br/></h5>";
		echo $_GET['nam'];
		echo "<br/>";
		echo "<h5>Your Contact Number<br/></h5>";
		echo $_GET['con'];
		echo "<br/>";
		echo "<h5>Your Birth Date<br/></h5>";
		echo $_GET['dob'];
		echo "<br/>";
		echo "<h5>Your E-mail ID<br/></h5>";
		echo $_GET['eml'];
	?>
</body>
</html>