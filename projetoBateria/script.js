/* primeiro vamos colocar um observador de eventos no corpo inteiro da página.
   Esse listner vai ativar uma função que criamos toda  vez que uma tecla for pressionada e solta.
   Vai pegar a informação de qual tecla foi pressionada, vai transformar em lowerCase e então vai passar como parâmetro.
   Nessa função chamada "playSound" recebemos a tecla pressionada em lowerCasa e então, passamos esse código, associado com 
   a id da tag audio, assim a tecla especifica e a tag serão as mesmas. Por fim temos uma verificação que se a tag existir
   então tocar o audio correspondente. */
   
document.body.addEventListener('keyup', (tecla) => {
    playSound(tecla.code.toLowerCase());
} );

function playSound(som) {

    let audioElement = document.querySelector(`#s_${som}`); 

    if(audioElement) {
        audioElement.play();
    } ;
}