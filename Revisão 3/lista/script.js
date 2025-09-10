//---------------------------------
// Funções
// 1 - Função Declarativa
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}
saudacao();

// 2 - Função com parâmetro
function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}
cumprimentar("Maria");

// 3 - Função Anônima
let mensagem = function() {
    console.log("Essa é uma função anônima!");
}
mensagem();

// 4 - Arrow Function
const multiplicar = (a, b) => a * b;
console.log("Multiplicação:", multiplicar(3, 5));

//---------------------------------
// DOM – Manipulação
// 1 - Trocando textos
function trocarTexto() {
    document.getElementById("paragrafo").innerText = "Texto alterado com JS!";
}

// 2 - Personalizando a página
function mudarFundo() {
    document.body.style.backgroundColor = "blue";
}

// 3 - Adicionando elementos
function adicionarItem() {
    let novoItem = document.createElement("li");
    novoItem.innerText = "Novo item";
    document.getElementById("lista").appendChild(novoItem);
}

// 4 - Removendo parágrafo
function removerParagrafo() {
    let p = document.getElementById("remover");
    if (p) p.remove();
}

// 5 - Personalização
function personalizar() {
    let texto = document.getElementById("textoEstilizado");
    texto.style.color = "blue";
    texto.style.fontSize = "20px";

    let titulo = document.getElementById("titulo");
    titulo.style.color = "green";
    titulo.style.fontSize = "35px";
}

//---------------------------------
// DOM - Eventos
// 1 - Digitação em tempo real
let campoTexto = document.getElementById("campoTexto");
campoTexto.addEventListener("input", function() {
    document.getElementById("textoDigitado").innerText = "Você digitou: " + campoTexto.value;
});

// 2 - Troca de texto com mouseover
let botaoMouse = document.getElementById("botaoMouseover");
botaoMouse.addEventListener("mouseover", function() {
    botaoMouse.innerText = "Você passou o mouse!";
});
botaoMouse.addEventListener("mouseout", function() {
    botaoMouse.innerText = "Passe o mouse aqui";
});

// 3 - Escondendo elementos com dblclick
let botaoEsconder = document.getElementById("botaoEsconder");
botaoEsconder.addEventListener("dblclick", function() {
    document.getElementById("textoEstilizado").style.display = "none";
});

// 4 - Alterando a fonte com valor aleatório
function alterarFonte() {
    let tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10; // entre 10 e 40
    document.getElementById("textoEstilizado").style.fontSize = tamanho + "px";
}
