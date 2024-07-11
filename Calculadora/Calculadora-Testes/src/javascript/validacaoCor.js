function validarCorResultado(resultado){

const elementoResultado = document.getElementById("resultadoFinal");

//resultado  >= 0 ? elementoResultado.style.color = "green" : elementoResultado.style.color = "red";

if (resultado >= 0){
    elementoResultado.style.color = "green";
} else {
    elementoResultado.style.color = "red";
}

}