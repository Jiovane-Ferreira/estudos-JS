var numero1 = document.getElementById('number1');
var numero2 = document.getElementById('number2');
var botao = document.getElementById('calcular');
var result = document.getElementById('resultado');
function calcular(n1, n2) {
    return +n1 + +n2;
}
botao.addEventListener('click', function () {
    result.innerHTML = calcular(numero1.value, numero2.value);
});
