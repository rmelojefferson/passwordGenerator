function generatePassword() {
	let characters = `0123456789!@#$%&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(){}[]~^?<>/|+-`;
	
	let randomPassword = '';
	let passwordLength = '';
	
	let passwordLength8 = document.getElementById("passwordLength8");    
	let passwordLength16 = document.getElementById("passwordLength16");    
	let passwordLength32 = document.getElementById("passwordLength32");    
	let newPassword = document.getElementById("newPassword");
		
		if(passwordLength16.checked == true) {
			passwordLength = 16;
		}else if(passwordLength32.checked == true) {
			passwordLength = 32;
		}else{
			passwordLength = 8;
		}


	for(let i = 0; i < passwordLength; i++) {
	    let randomCharacter = Math.floor(Math.random()*characters.length);
	    randomPassword += characters[randomCharacter];
	}

	if(randomPassword.match(/[0-9]/g) == null || 
		!randomPassword.match(/[a-z]/g) || 
		!randomPassword.match(/[A-Z]/g) || 
		randomPassword.match(/[A-Z]/g).length == 1 || 
		!randomPassword.match(/[\W|_]/g)) {
			
		return generatePassword();
	}

	newPassword.value = randomPassword;
	newPassword.select();
	document.execCommand("copy");
	document.getElementById("btGeneratePassword").focus();
}
let btGeneratePassword = document.getElementById("btGeneratePassword");
btGeneratePassword.addEventListener("click", generatePassword);
