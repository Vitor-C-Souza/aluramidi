function tocarSom(tecla){
    document.querySelector(`#som_tecla_${tecla}`).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla =>{
    tecla.onclick = function () { 
        tocarSom(tecla.textContent.toLowerCase());
    };
});