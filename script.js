const imagemGato = document.getElementById('gatinho');
const mensagemErro = document.getElementById('mensagem-erro'); // Elemento para exibir a mensagem

function buscarGatoAleatorio() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resposta => resposta.json())
        .then(dados => {
            imagemGato.src = dados[0].url;
            mensagemErro.textContent = ''; // Limpar mensagem de erro anterior
        })
        .catch(error => {
            console.error('Erro ao buscar imagem:', error);
            mensagemErro.textContent = 'Ops! Algo deu errado ao carregar a imagem do gatinho. Tente novamente mais tarde.';
        });
}

buscarGatoAleatorio();