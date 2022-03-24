const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

console.log(imagensPainel)

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

setaAvancar.addEventListener('click', function() {
    const totalImagens = imagensPainel.length -1;
    if(imagemAtual === totalImagens -1){
        setaAvancar.classList.remove('mostrar-seta')
        setaAvancar.classList.add('esconder-seta')
    }

    if(imagemAtual === totalImagens){
        return
    }
    imagemAtual++;

    esconderImagens()

    imagensPainel[imagemAtual].classList.add('mostrar');
    setaVoltar.classList.add('mostrar-seta')
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 1) {
        setaVoltar.classList.remove('mostrar-seta')
        setaVoltar.classList.add('esconder-seta')
    }

    if(imagemAtual === 0){
        return
    }

    imagemAtual--;

    esconderImagens()

    imagensPainel[imagemAtual].classList.add('mostrar');
    setaAvancar.classList.add('mostrar-seta')
})
