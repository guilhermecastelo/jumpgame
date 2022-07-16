let jogo = document.querySelector("#jogo");
let personagem = document.querySelector("#personagem");
let obstaculo = document.querySelector("#obstaculo");
let aviso = document.querySelector("#aviso");
let avenida = document.querySelector("#avenida");
let btnPular = document.querySelector("#btnPular");

function pular() {
    if (personagem.classList != 'pular') {
        personagem.classList.add('pular');
    }

    setTimeout(function () {
        personagem.classList.remove('pular');
    }, 350)

}

var testarColisao = setInterval(function () {
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var Esquerdaobstaculo = parseInt(
        window.getComputedStyle(obstaculo).getPropertyValue('left')
    )

    if (Esquerdaobstaculo < 60 && Esquerdaobstaculo > 0 && topoPersonagem >= 55) {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = '60px';
        avenida.style.backgroundImage = "url('img/avenida_parada.png')";
        btnPular.disabled = 'true';
        btnPular.style.backgroundImage = "url('img/botao_desativado.png')";
        btnPular.style.cursor = 'default';
        document.body.onkeydown = '';
        document.body.onmousedown = ''
        aviso.style.display = 'block';
        aviso.innerHTML = "Você bateu :(<br><a href='index.html'>Reiniciar</a>";
    }

}, 10);

if(window.innerWidth < 500){
    alert('Parece que você está usando um celular. 🧐\nAtive a rotação de tela e jogue com o dispositivo na horizontal para ter uma melhor experiência do game. 🤩');
}