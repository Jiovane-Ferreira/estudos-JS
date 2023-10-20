let numero1 = document.getElementById('number1') as HTMLInputElement;
let numero2 = document.getElementById('number2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let result = document.getElementById('resultado');

function calcular(n1, n2) {
    return +n1 + +n2;
}

botao.addEventListener('click', function() {
    result.innerHTML = calcular(numero1.value, numero2.value);

});