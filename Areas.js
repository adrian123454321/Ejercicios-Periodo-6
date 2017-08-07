var areaTriangulo = function(base, altura){
	return "el area es " + ((base*altura)/2);
}

var areaCirculo = function(radio){
	return "el area es " + (3.14*(radio)^2);
}


var areaRectangulo = function(base, altura){
	return "el area es " + (base* altura);
}


var dato = function(funcion, dato1, dato2){
	return funcion(dato1, dato2);
}

console.log(dato(areaCirculo, 4,4));
