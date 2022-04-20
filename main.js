let contador = 0
let comprobar = []
let numeros = [1,1,2,2,3,3]


asignarJugador()

/*Interacción Clicks*/

document.querySelector('#start').onclick = function(){
    mezclar()
    asignar()
}

document.querySelector('#carta--1').onclick = function(){
    let carta1 = document.querySelector('#p--1')
    carta1.className = 'mostrar'    
    comprobar.push(carta1.textContent)
    tiempo()}

document.querySelector('#carta--2').onclick = function(){
    let carta2 = document.querySelector('#p--2')
    carta2.className = 'mostrar'    
    comprobar.push(carta2.textContent)  
    

}

document.querySelector('#carta--3').onclick = function(){
    let carta1 = document.querySelector('#p--3')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)    
    tiempo()
}

document.querySelector('#carta--4').onclick = function(){
    let carta1 = document.querySelector('#p--4')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    tiempo()
}

document.querySelector('#carta--5').onclick = function(){
    let carta1 = document.querySelector('#p--5')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    tiempo()
}

document.querySelector('#carta--6').onclick = function(){
    let carta1 = document.querySelector('#p--6')
    carta1.className = 'mostrar'
    comprobar.push(carta1.textContent)
    tiempo()
}


/*Funciones de comprobación, asignación y reinicio*/

function comprobarResultado(){  

    if(comprobar.length === 1){
        rondas()
    }

            if(comprobar.length === 2 && comprobar[0] == comprobar[1]){
            asignarCorrecto()
            reiniciarValorComprobar()
            
        }else if(comprobar.length === 2 && comprobar[0] != comprobar[1]){
            document.querySelectorAll('.mostrar').forEach(function(item) {
                item.className = 'oculto';
              })
              reiniciarValorComprobar()
        }
    }     


function reiniciarValorComprobar(){
    comprobar=[]
}

function asignarCorrecto(){
    document.querySelector('.mostrar').className = 'correcto'
    document.querySelector('.mostrar').className = 'correcto'
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


function asignarJugador(){
    let PLAYER1 = prompt('Ingrese su nombre')
    document.querySelector('#player--1').textContent = PLAYER1
}

function rondas(){
    contador++
    document.querySelector('h2').textContent = contador
}

function tiempo(){
    setTimeout(comprobarResultado, 2000);
}