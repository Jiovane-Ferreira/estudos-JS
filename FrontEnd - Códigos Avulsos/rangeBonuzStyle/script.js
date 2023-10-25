//resgate de variáveis

let valueDisplay = document.getElementById('valueDisplay');
let valueRange = document.getElementById('valueRange');
let text1 = document.getElementById('text-1');
let text2 = document.getElementById('text-2');
let text3 = document.getElementById('text-3');
let text4 = document.getElementById('text-4');

//evento Listener que chama os eventos

valueRange.addEventListener('input', rangeFunction);


//funções do código

function demandas() {

    valueDisplay.innerText = valueRange.value;
}

function showHide() {
    
    if (valueRange.value >= 4 && valueRange.value <= 8) {

        text1.style.display = 'none';
        text2.style.display = 'inline-block';
        text3.style.display = 'none';
        text4.style.display = 'none';

    } else if (valueRange.value >= 9 && valueRange.value <= 12) {

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'inline-block';
        text4.style.display = 'none';
        
    } else if (valueRange.value >= 13) {

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'inline-block';

    } else {

        text1.style.display = 'inline-block';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
    }

}

function rangeFunction() {
    
    demandas();
    showHide();
}