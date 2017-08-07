var altura = 10
var asterisco = "*"
var linea =" "
var cont =altura;
	for(var i=0; i <= altura ; i++){
		console.log(linea.repeat(cont)+ asterisco.repeat(i)+"\n");
		cont = cont- 1;
}
console.log(linea.repeat(4)+ asterisco + "\n");
console.log(linea.repeat(4)+ asterisco + "\n");