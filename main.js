let comprobar = []
const PLAYER1 = prompt('Ingrese su nombre')
let numeros = [1,1,2,2,3,3]


document.querySelector('#start').onclick = function(){
    mezclar()
    asignar()
}

document.querySelector('#carta--1').onclick = function(){
    let carta1 = document.querySelector('#p--1')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    comprobarResultado()
}

document.querySelector('#carta--2').onclick = function(){
    let carta2 = document.querySelector('#p--2')
    carta2.className = 'mostrar'
    comprobar.push(carta2.textContent)  
    comprobarResultado()

}

document.querySelector('#carta--3').onclick = function(){
    let carta1 = document.querySelector('#p--3')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    comprobarResultado()
}

document.querySelector('#carta--4').onclick = function(){
    let carta1 = document.querySelector('#p--4')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    comprobarResultado()
}



function comprobarResultado(){
    resultado = []
    if(comprobar.length === 2){
        for(let i = 0; i < comprobar.length; i++){
            resultado.push(comprobar[i])
        }
        if(comprobar[i] == resultado[i]){
            asignarCorrecto()
        }else{
            document.querySelectorAll('p').forEach(function(item) {
                item.className = 'oculto';
              })
            
        }
    }
     else if(comprobar.length > 3){
        comprobar = []
    }
}

function reiniciar(){
    
}

function asignarCorrecto(){
    document.querySelectorAll('.mostrar').className = 'correcto'
}

function asignar(){
        document.querySelector('#p--1').innerText = numeros[0]
        document.querySelector('#p--2').innerText = numeros[1]
        document.querySelector('#p--3').innerText = numeros[2]
        document.querySelector('#p--4').innerText = numeros[3]
        document.querySelector('#p--5').innerText = numeros[4]
        document.querySelector('#p--6').innerText = numeros[5]
}


function mezclar(){
    numeros.sort(()=> Math.random() - 0.5)
    console.log(numeros)
}