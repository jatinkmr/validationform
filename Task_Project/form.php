<html>
	<head>			
		<title>User Information</title>
		<link rel="stylesheet" type="text/css" href="layout.css">
		<script src="valid.js"></script>
	</head>
	<body>
		<form name="myfrm" action="welcome.php" onsubmit="return validation()">
			<table>				
				<tr>
					<center><td colspan="2"><h1><u>User Information</u></h1></td></center>
				</tr>				
				<tr>
					<td>Name</td>
					<td><input type="text" name="nam" id="nme" autocomplete="off"></td>					
				</tr>
				<tr>
					<td></td><td><h6 id="unme"> </h6></td>
				</tr>						
				<tr>
					<td>Date of Birth</td>
					<td><input type="Date" name="dob" id="dte"></td>
				</tr>
				<tr>
					<td></td><td><h6 id="dtvld"> </h6></td>
				</tr>			
				<tr>
					<td>Contact No</td>
					<td><input type="text" name="con" id="cont" autocomplete="off"></td>
				</tr>	
				<tr>
					<td></td><td><h6 id="conph"> </h6></td>
				</tr>
				<tr>
					<td>E-mail id</td>
					<td><input type="text" name="eml" id="mail" autocomplete="off"></td>
				</tr>											
				<tr>
					<td></td><td><h6 id="mlid"> </h6></td>
				</tr>
				<tr>
					<center><td colspan="2"><input type="submit" value="Submit" style="background-color: #00FFCC; color: #003300; font-weight: bold;"></td></center>				
				</tr>				
			</table>		
		</form>
	</body>
</html>