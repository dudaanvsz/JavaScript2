//script.js
//entrada de dados - prompt
let nome = prompt("Qual seu nome?")
console.log("Meu nom é", nome)
//entrada de dados - value
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = "Olá" + input.value
})
//-----------------------------------------------
//conversão de tipos
const valor = document.getElementById("valor")
const converter = document.getElementById("converter")
const resultado = document.getElementById("resultado")

converter.addEventListener("click", () => {
    let texto = valor.value
    let numero = Number(texto)
    let dobro = numero * 2
    resultado.innerText = "O dobro é " + dobro
})
//---------------------------------------------
//funções de texto
let frase = "Eu gosto de a Metaformose"
console.log(frase)
console.log(frase.length) //conta letras e espaços
console.log(frase.toUpperCase) //tudo maiusculo
console.log(frase.toLowerCase) //tudo minusculo
console.log(frase.includes("gosto")) //se tem na frase
console.log(frase.charAt(5)) //o que tem nessa posição
console.log(frase.replace("gsoto de", amo)) //troca
//-------------------------------------------------
//funções matemáticas 
let arredondado1 = Math.round(4.6)
let arredondado2 = Math.round(4.2)

let arredondado3 = Math.floor(5.8) //arredonda para baixo
let arredondado4 = Math.floor(5.2) //arredonda para cima

console.log("round 4.6", arredondado1)
console.log("round 4.2", arredondado2)
console.log("floor 5.8", arredondado3)
console.log("ceil 5.2", arredondado4)

let maior = Math.max(5, 10, 8, 6, 2, 30)
let menor = Math.min(5, 10, 8, 6, 2, 30)
console.log("Maior valor: ", maior)
console.log("Menor valor: ", menor)

let raiz = Math.sqrt(25)
let absoluto = Math.abs(-8)
console.log(raiz)
console.log(absoluto)

//gerar número entre 1 e 10
let aleatorio = Math.floor(Math.random()*10)+1
console.log(aleatorio)
//---------------------------------------------------
//datas
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")

data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.
    getDate() + "/" + (agora.getMonth() +1) + "/" + agora.getFullYear()
    dataAtual.innerText = "Hoje é: " + dataFormatada
})

const hoje = new Date()
const dataPassada = new Date("2025-06-15")

const diferenca = hoje - dataPassada
const diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24))

console.log("Se passaram ", diasPassados, "desde 15/06/2025")