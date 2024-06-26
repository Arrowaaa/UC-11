function calcular() {
    const primeiroNumero = parseFloat(document.getElementById('primeiroNumero').value);
    const operacao = document.getElementById('operacao').value;
    const segundoNumero = parseFloat(document.getElementById('segundoNumero').value);
    let resultado = 0;

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    switch (operacao) {
        case 's':
            resultado = primeiroNumero + segundoNumero;
            break;
        case 'd':
            if (segundoNumero === 0) {
                alert('Divisão por zero não é permitida.');
                return;
            }
            resultado = primeiroNumero / segundoNumero;
            break;
        case 'a':
            resultado = primeiroNumero - segundoNumero;
            break;
        case 'm':
            resultado = primeiroNumero * segundoNumero;
            break;
        default:
            alert('Por favor, escolha uma operação.');
            return;
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
