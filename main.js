let comprobar = []
const PLAYER1 = prompt('Ingrese su nombre')
let numeros = [1,1,2,2,3,3]


document.querySelector('#start').onclick = function(){
    mezclar()
}

document.querySelector('#carta--1').onclick = function(){
    let carta1 = document.querySelector('#p--1')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
}

document.querySelector('#carta--2').onclick = function(){
    let carta2 = document.querySelector('#p--2')
    carta2.className = 'mostrar'
    comprobar.push(carta2.textContent)  

}


function comprobarResultado(){
    let resultado = []
    
    for(let i = 0; i< comprobar.length; i++){
        resultado.push(comprobar[i])
    }

    if(comprobar === resultado){
        
    }
}

function asignar(){
        let cartas = document.querySelectorAll('carta')
        cartas.
}


function mezclar(){
    numeros.sort(()=> Math.random() - 0.5)
    console.log(numeros)
}