//resgate de variáveis

let valueDisplay = document.getElementById('valueDisplay');
let valueRange = document.getElementById('valueRange');

let textoDinamico = document.getElementById('texto');

//evento Listener que chama os eventos

textoDinamico.innerHTML = 'Você solicita até 1 demandas por mês, então o plano <br /> ideal para a sua empresa é o Plano Freemium.';

valueRange.addEventListener('input', rangeFunction);


//funções do código

function demandas() {

    valueDisplay.innerText = valueRange.value;
}

function dynamicTextChange() {
    
    if (valueRange.value >= 4 && valueRange.value <= 8) {

        textChange('Essêncial');

    } else if (valueRange.value >= 9 && valueRange.value <= 12) {

        textChange('Premium');
        
    } else if (valueRange.value >= 13) {

        textChange('Platinum');

    } else {

        textChange('Freemium');
    }

}


function textChange(plano) {

    textoDinamico.innerHTML = `Você solicita até ${valueRange.value} demandas por mês, então o plano <br /> ideal para a sua empresa é o Plano ${plano}.`;

}

function rangeFunction() {
    
    demandas();
    dynamicTextChange();
}