// Variáveis do jogo
let numeroSecreto;
let tentativasMaximas = 7;
let tentativasRestantes;

// Elementos do DOM
const palpiteInput = document.getElementById('palpiteInput');
const chutarBtn = document.getElementById('chutarBtn');
const mensagem = document.getElementById('mensagem');
const tentativasRestantesParagrafo = document.getElementById('tentativasRestantes');

// Função para iniciar o jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    tentativasRestantes = tentativasMaximas;
    mensagem.textContent = 'Adivinhe o número!';
    tentativasRestantesParagrafo.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    palpiteInput.value = ''; // Limpa o input
    palpiteInput.disabled = false;
    chutarBtn.disabled = false;
}

// Função para verificar o palpite do jogador
function verificarPalpite() {
    const palpite = parseInt(palpiteInput.value);

    // Validação do palpite
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Por favor, digite um número válido entre 1 e 100.';
        return;
    }

    tentativasRestantes--; // Decrementa as tentativas

    if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns, você acertou! O número secreto era ${numeroSecreto}.`;
        encerrarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = 'O número secreto é maior.';
    } else {
        mensagem.textContent = 'O número secreto é menor.';
    }

    tentativasRestantesParagrafo.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        encerrarJogo();
    }
}

// Função para encerrar o jogo
function encerrarJogo() {
    palpiteInput.disabled = true;
    chutarBtn.disabled = true;
}

chutarBtn.addEventListener('click', verificarPalpite);

// Iniciar o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarJogo);