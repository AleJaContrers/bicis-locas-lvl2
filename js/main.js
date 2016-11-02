function validateForm(){
	
	//Nombre
	var nombre= document.getElementById("name").value;

	//Comprueba nombre vacio
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		//alert("El nombre debe ser ingresado");
		var contenedorNombre = document.getElementsByClassName('name-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su nombre!"); 
		error.appendChild(mensajeError);
		contenedorNombre.appendChild(error);
		return false;

	//Comprueba que ingrese nombre en caracteres letras
	}else if(/^[a-zA-Z]*$/.test(nombre)===false){
		//alert("Nombre mal ingresado, pruebe nuevamente");
		var contenedorNombre = document.getElementsByClassName('name-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su nombre solo con letras!"); 
		error.appendChild(mensajeError);
		contenedorNombre.appendChild(error);
		return true;

	//Comprueba que primera letra sea mayuscula
	}else if (nombre.charAt(0).toUpperCase()!==nombre.charAt(0)){
		//alert("La primera letra del nombre debe ser mayuscula");
		var contenedorNombre = document.getElementsByClassName('name-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡La primera letra debe ser mayuscula!"); 
		error.appendChild(mensajeError);
		contenedorNombre.appendChild(error);	
		return false;
	}

	//Apellido
	var apellido= document.getElementById("lastname").value;

	// Comprueba apellido vacio
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  		//alert("El apellido debe ser ingresado");
  		var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su apellido!"); 
		error.appendChild(mensajeError);
		contenedorApellido.appendChild(error);
		return false;

	//Comprueba que apellido sea ingresado en caracteres letras
	} else if (/^[a-zA-Z]*$/.test(apellido)===false){
		//alert("Apellido mal ingresado, pruebe nuevamente");
		var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su apellido solo con letras!"); 
		error.appendChild(mensajeError);
		contenedorApellido.appendChild(error);
		return true;
	// Comprueba que primera letra del apellido sea ingresada con letra mayuscula
	} else if (apellido.charAt(0).toUpperCase()!==apellido.charAt(0)){
		//alert("La primera letra del apellido debe ser mayuscula");
		var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡La primera letra debe ser mayuscula!"); 
		error.appendChild(mensajeError);
		contenedorApellido.appendChild(error);
		return false;
	}

	//Mail
	var mail=document.getElementById("input-email").value;

	// Compruema que campo e-mail no este vacio
	if (mail == null || mail.length == 0 || /^\s+$/.test(mail) ) {
		//alert("El mail debe ser ingresado");
		var contenedorMail = document.getElementsByClassName('email-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su correo electronico!"); 
		error.appendChild(mensajeError);
		contenedorMail.appendChild(error);
		return false;

	} else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
  		//alert("Correo ingresado correctamente");
  		return true;
  	}else{
  		//alert("ingresa correo correctamente");
  		var contenedorMail = document.getElementsByClassName('email-container')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su correo electronico!"); 
		error.appendChild(mensajeError);
		contenedorMail.appendChild(error);
		return false;
  	}

  	// Clave
  	var password=document.getElementById("input-password").value;
  	// Comprueba que campo clave no este vacio
  	if (password == null || password.length == 0 || /^\s+$/.test(password) ) {
		//alert("La contraseña debe ser ingresada");
		var contenedorPass = document.getElementsByClassName('form-group')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su clave!"); 
		error.appendChild(mensajeError);
		contenedorPass.appendChild(error);
		return false;

	// Comprueba que clave sea al menos de 6 caracteres
	}else if (password.length<=5) {
		//alert("La clave debe ser de al menos 6 caracteres");
		var contenedorPass = document.getElementsByClassName('form-group')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe ingresar su clave de al menos 6 caracteres"); 
		error.appendChild(mensajeError);
		contenedorPass.appendChild(error);
		return false;

	// Comprueba que clave no sea igual a 123456, 098754 y a password
	}else if(password==="123456" || password==="098754" || password==="password") {
		//alert("Debe ingresar clave diferente");
		var contenedorPass = document.getElementsByClassName('form-group')[0];
		var error = document.createElement("span"); 
		var mensajeError = document.createTextNode("¡Debe una clave diferente!"); 
		error.appendChild(mensajeError);
		contenedorPass.appendChild(error);
		return false;
	}else{
		return true;
	}

}

	
	
	






