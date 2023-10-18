//primeiro vamos colocar um observador de eventos no corpo inteiro da página.
document.body.addEventListener('keyup', (tecla) => {
    playSound(tecla.code.toLowerCase());
} );

function playSound(som) {

    let audioElement = document.querySelector(`#s_${som}`); 

    if(audioElement) {
        audioElement.play();
    } ;
}