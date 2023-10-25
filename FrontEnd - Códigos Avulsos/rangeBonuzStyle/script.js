//resgate de variáveis

let valueDisplay = document.getElementById('valueDisplay');
let valueRange = document.getElementById('valueRange');

valueRange.addEventListener('input', ()=> {

    valueDisplay.innerHTML = valueRange.value;

});