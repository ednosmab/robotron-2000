let controle = document.querySelectorAll("[data-controle]")
let estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (event)=>{
        manipulaDados(event.target.dataset.controle, elemento.parentNode)
        atualizaEstatistica(event.target.dataset.peca, event.target.dataset.controle, elemento.parentNode)
    })
})

function manipulaDados(operacao, controle){
    let peca = controle.querySelector("[data-contador]")
    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }else{
        if(peca.value > 0) peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatistica(peca, operacao, controle){
    let quantidadePeca = controle.querySelector("[data-contador]")
    if(operacao === "+"){
        estatistica.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }else if (quantidadePeca.value != "00") {
        estatistica.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
    if(quantidadePeca.value == 0){
        quantidadePeca.value = "00"
    }
}