var saludoformal = function(nombre){
	return " buenas tardes " + nombre + " gusto en saludarlo "
}

var saludoinformal = function (nombre) {
	return " que tal " + nombre + "?";
	// body...
}

var saludar = function(saludo,nombre ) {
	return saludo (nombre);
}

var persona="PEpe";

if (persona=="Adrian"){
	console.log(saludar(saludoformal, persona));
} else{
	console.log(saludar(saludoinformal, persona));
}