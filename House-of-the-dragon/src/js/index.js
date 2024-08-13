const botoesCarrossel = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

 botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();

        botao.classList.add("selecionado");

        esconderImagemAtiva();

        mostrarImagenDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);
    });
});

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtivas = document.querySelector(".informacoes.ativa");
    informacoesAtivas.classList.remove("ativa");
}

function mostrarImagenDeFundo(indice) {
    imagem[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva
        .classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
