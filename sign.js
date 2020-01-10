
function validate()

		{
			var name = document.getElementById('name');
			var username = document.getElementById('uname');
			var mail = document.getElementById('email');
			var pass = document.getElementById('pass');
			var cpass = document.getElementById('pass2');


		if ((username.length) <= 5 && (username.length) >= 20)
		{
			alert("username must be at least 5 character");
			return false;
		}	

		if (name.value.trim() == "") 
		{
			alert ("Please enter your name");
			name.style.border = "solid 3px red" ;
			return false;
		}

		if (username.value.trim()== "")
		{
			alert("Please enter your username");
			username.style.border = "solid 3px red" ;
			return false;
		}

		if (mail.value.trim()== "")
		{
			alert("Please enter your mail");
			mail.style.border = "solid 3px red" ;
			return false;
		}
		 if (pass.value.trim()== "")
		{
			alert("Empty password");
			pass.style.border = "solid 3px red" ;
			return false;
		}

		 if (cpass.value.trim()== "")
		{
			alert("Retype the password");
			cpass.style.border = "solid 3px red" ;
			return false;
		}

	    if (name.value.trim()=="" || username.value.trim()=="" || mail.value.trim()=="" || pass.value.trim()==""|| cpass.value.trim()=="")
		{
			alert("All fields must be field");
			return false;
		}

		if(pass.value != cpass.value)
		{
			alert("Password doesn't match");
			return false;
		}

		else
		{
			 return true;
		}

	}