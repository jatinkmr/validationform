function validation(){

	var usrnm = document.getElementById('nme').value;
	var ucon = document.getElementById('cont').value;
	var umail = document.getElementById('mail').value;
	var dateString = document.getElementById('dte').value;

	if(dateString !=""){
    	var today = new Date();
    	var birthDate = new Date(dateString);
    	var age = today.getFullYear() - birthDate.getFullYear();
    	var m = today.getMonth() - birthDate.getMonth();
    	var da = today.getDate() - birthDate.getDate();
    	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    if(m<0){
        	m +=12;
    	}
    	if(da<0){
	        da +=30;
	    }

  		if(age < 18 || age > 100){
  			document.getElementById('dtvld').innerHTML = "** Please Fill the Correct Date of Birth.";
  			return false;
  		}
	} else {
		document.getElementById('dtvld').innerHTML = "** Please Fill the Date of Birth.";
		return false;
	}

	if(usrnm == ""){
		document.getElementById('unme').innerHTML = "** Please Fill the UserName Properly.";				
		return false;
	}

	if((usrnm.length < 2) || (usrnm.length > 21)){
		document.getElementById('unme').innerHTML = "** UserName must be Between 2 and 20.";
		return false;
	}

	if(!isNaN(usrnm)){
		document.getElementById('unme').innerHTML = "** Only Character's Allowed Not Numbers.";
		return false;
	}

	if(ucon == ""){
		document.getElementById('conph').innerHTML = "** Please Fill the UserContact Properly.";
		return false;
	}	
				
	if(isNaN(ucon)){
		document.getElementById('conph').innerHTML = "** Only Number's Allowed Not Character's.";
		return false;
	}

	if(ucon.length != 10){
		document.getElementById('conph').innerHTML = "** User must write 10 Digit's Contact Number.";
		return false;	
	}
				
	if(umail == ""){
		document.getElementById('mlid').innerHTML = "** Please Fill the E-Mail Id.";
		return false;
	}

	if(umail.indexOf('@') <= 0){
		document.getElementById('mlid').innerHTML = "** @ Position is InValid.";
		return false;
	}

	if((umail.charAt(umail.length-4) != '.')&&(umail.charAt(umail.length-3) != '.')){
		document.getElementById('mlid').innerHTML = "** . Position is InValid.";
		return false;
	}

}