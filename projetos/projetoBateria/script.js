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
    let keyElement = document.querySelector(`div[data-key="${som}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    } ;

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(()=>{ keyElement.classList.remove('active'); }, 300);
    }

}

/* Parte do Código dedicada tocar a composição digitada */

// coloca um observador de evento diretamente no botão de tocar a canção, fazendo com que ao clicar, um evento ("canção") seja executado
document.querySelector('.composer button').addEventListener('click', cancao);


function cancao() {

    // pega o valor digitado no input
    let musica = document.querySelector('#input').value;

    // verifica se o tipo do arquivo é indefinido, se não está vazio e se é uma string.
    // depois pega a string e transforma em um array e então envia esse array para uma função "playMusica".
    if(typeof musica !== 'undefined' && musica !== '' && typeof musica === 'string') {
        let arrayMusica = musica.split('');
        playMusica(arrayMusica);
    }

}

// a função recebe o array enviado anteriormente, então inicializamos uma variável com o valor em zero
// essa variável será o nosso tempo utilizado no SetTimeout, que inicia em zero, porém a cada volta do looping, adiciona +250milissegundos.
function playMusica(arrayMusica) {

    let espera = 0;

    for (let songItem of arrayMusica) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, espera);

        espera += 250;

    }

}