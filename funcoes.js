function clickNome(){

    let section = document.getElementById("tela-atari");
    let campoNome = document.getElementById("campoNome").value
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = campoNome;

}

function clickA(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou no Botão A !';
}
b
function clickB(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou no Botão B !';
}

function clickUp(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou para Cima !';
}

function clickDown(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou para Baixo !';
}

function clickLeft(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou para Esquerda !';
}

function clickRight(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou para Direita !';
}

function clickFire(){
    let section = document.getElementById("tela-atari");

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = 'Voce clicou para Atirar !';
}




const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Botão pressionado:', button.classList[1]);
    // Aqui você pode adicionar a lógica para cada botão,
    // por exemplo, mover um personagem na tela
  });
});