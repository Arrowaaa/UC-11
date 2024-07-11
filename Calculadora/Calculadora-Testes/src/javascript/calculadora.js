function calcula(){
    var valor1, valor2, operacao
     // Captura valores da tela 
    operacao = document.querySelector('#operacao').value;
    valor1 = parseFloat(document.querySelector('#primeiroNumero').value);    
    valor2 = parseFloat(document.querySelector('#segundoNumero').value);
   
    var resultado = '';

    resultado = calculadora(operacao, valor1, valor2);

    validarCorResultado(resultado);

    document.getElementById("resultadoFinal").innerHTML = resultado;

}

function calculadora(operacao, valor1, valor2) {
if (operacao === "selecione"){
   alert("Escolha alguma operação")
    return "";
}
if (operacao === "soma"){    
    return soma(valor1, valor2);
}   
if (operacao === "multiplicacao"){    
    return multiplica(valor1, valor2);
}
if (operacao === "divisao"){    
    return divide(valor1, valor2);
}
if (operacao === "subtracao"){    
    return subtrai(valor1, valor2);
}


}