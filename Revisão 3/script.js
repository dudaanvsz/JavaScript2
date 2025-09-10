//script.js
//---------------------
//Funções
//Função declarativa
function saudacao(){
    console.log("Olá")
}

saudacao() //Executando/chamando a função
// função com parâmetro e retorno
function dobrar(numero) {
    return numero * 2
}
let resultado = dobrar(5)
console.log(resultado)

//função anônima
let mostrarMensagem = function() {
    console.log("função anônima")
}
mostrarMensagem()

//arrow funcition
const somae = (a,b) => {
    return a + b
}
console.log(somar(3,7))

//manipulção do dom
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "Texto Alterado"

let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontSize = "30px"

let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)
//apagndo um elemento no html
let apagar = document.getElementById("apagar")
apagar.remove()
//-----------------------------------------------
//eventos do dom
let botao = document.getElementById("botao")
botao.addEventListener("click", function() {
    alert("Você clicou no botão")
})
function mostrarNome() {
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Você digitou: " + nome
}
function mudarCor() {
    document.getElementById("caixa").style.backgroundColor = "blue"
    document.getElementById("caixa").innerText = "Passou o mouse"
}
function corOriginal() {
    document.getElementById("caixa").style.backgroundColor = "red"
     document.getElementById("caixa").innerText = "passe o mouse aqui"
}
