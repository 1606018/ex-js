


function executar(){
    // 1 - Entrada de dados
    const valor01 = Number(document.querySelector("#input01").value)
    const valor02 = Number(document.querySelector("#input02").value)
    const valor03 = Number(document.querySelector("#input03").value)

    // 2 - Processamento
    let resultado = retornaPares()
    // let resultado = calculaMedia(valor01, valor02, valor03)
    // let resultado = menorNumero(valor01, valor02)
    // let resultado = maiorNumero([valor01, valor02, valor03])
    // let resultado = maiorNumero([valor01, valor02, valor03])
    // let resultado = inverteArray([valor01, valor02, valor03])
    // let resultado = encontrarNumero([1, 2, 3], 2)

    // 3 - Saída de dados
    mostrarNaTela(resultado)
}

function mostrarNaTela(valor) {
    const elResultado = document.querySelector("#resultado")
    elResultado.innerHTML = valor 
}

// EXERCICIO 06 ===============================
function encontrarNumero(vetor, encontrar){
    let elementoEncontrado = vetor.find((elemento) => elemento == encontrar)
    return elementoEncontrado ? "ENCONTROU" : "NÃO ENCONTROU" 
}

// EXERCICIO 05 ===============================
function inverteArray(vetor) {
    // let vetorInvertido = []
    // for (let index = vetor.length - 1; index >= 0; index--) {
    //     vetorInvertido.push(vetor[index])
    // }

    // return vetorInvertido
    return vetor.reverse()
}

// EXERCICIO 04 ===============================
function maiorNumero(numeros){

    let maiorNumero = numeros[0]
    numeros.forEach(numero => {
        if(numero > maiorNumero)
            maiorNumero = numero
    });

    return maiorNumero
    // return Math.max(...numeros)
}

// EXERCICIO 03 ===============================
function menorNumero(valor01, valor02) {
    // Processamento
    let menorNumero
    // let menorNumero = valor01 < valor02 ? valor01 : valor02
    if (valor01 < valor02) {
        menorNumero = valor01
    } else {
        menorNumero = valor02
    }

    return menorNumero
}

// EXERCICIO 02 ===============================
function calculaMedia(valor01, valor02, valor03) {
    const media = (valor01 + valor02 + valor03) / 3

    return media
}


// EXERCICIO 01 ===============================
function retornaPares() {
    let pares = []
    for (let index = 2; index <= 100; index = index + 2) {
        pares.push(index)
    }

    return pares.join(", ")
}
