var numeroAleatorio = parseInt(Math.random() * 11);


var tentativa = 0;
const inputChute = document.getElementById("chute");
const botao = document.getElementById("botao");
const divResultado = document.getElementById("resultadoTentativa");


function chutar(){
    const chute = inputChute.value;
    if ( chute > -1 && chute < 11){
        if (tentativa < 3){
            if (chute == numeroAleatorio) {
                divResultado.innerHTML = `<p>Parabéns! Você acertou!</p>`;
                botao.disabled = true;
            } else if ( chute != numeroAleatorio && tentativa < 2) {
                divResultado.innerHTML = `<p>Nop! Tente outra vez.</p>`;
                tentativa++;
            } else {
                tentativa++;
                maxTentativas(tentativa);
            }
        } 

    } else {
        divResultado.innerHTML = `<p>Número inválido</p>`;
    }
    
}

function maxTentativas(tentativa) {
    if (tentativa > 2) {
        divResultado.innerHTML = `<p>Tentativas esgotadas.</p>
        <p>O número que pensei foi ${numeroAleatorio}!</p>`;
        botao.disabled = true;
    }

}


