let contador = 0
let comprobar = []
let numeros = [1,1,2,2,3,3]
let start = false


asignarJugador()


/*Interacción Clicks*/

document.querySelector('#start').onclick = function(){
    start = true
    comprobarBotonStart()
    mezclarCartas()
    asignarCartas()
    ocultarStart()
}

document.querySelector('#carta--1').onclick = function(){
    let carta1 = document.querySelector('#p--1')
    carta1.className = 'mostrar'    
    comprobar.push(carta1.textContent)
    tiempo()
}

document.querySelector('#carta--2').onclick = function(){
    let carta2 = document.querySelector('#p--2')
    carta2.className = 'mostrar'    
    comprobar.push(carta2.textContent)  
    tiempo()

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

   
        if(comprobar.length === 2 && comprobar[0] == comprobar[1]){
            asignarCorrecto()
            reiniciarValorComprobar()
            
        }else if(comprobar.length === 2 && comprobar[0] != comprobar[1]){
            document.querySelectorAll('.mostrar').forEach(function(item) {
                item.className = 'oculto';
              })
              reiniciarValorComprobar()
        }
        else if(comprobar.length >= 2){
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
    comprobarVictoria()
}

function asignarCartas(){
        document.querySelector('#p--1').innerText = numeros[0]
        document.querySelector('#p--2').innerText = numeros[1]
        document.querySelector('#p--3').innerText = numeros[2]
        document.querySelector('#p--4').innerText = numeros[3]
        document.querySelector('#p--5').innerText = numeros[4]
        document.querySelector('#p--6').innerText = numeros[5]
}


function mezclarCartas(){
    numeros.sort(()=> Math.random() - 0.5)
    console.log(numeros)
}


function asignarJugador(){
    let PLAYER1 = prompt('Ingrese su nombre')
    document.querySelector('#player--1').textContent = PLAYER1
}

function tiempo(){
    setTimeout(comprobarResultado, 50);
}

function comprobarBotonStart(){
    if(start === true){
        document.querySelector('#fila--cartas1').id = 'sect1'
        document.querySelector('#fila--cartas2').id = 'sect2'
    }else{
        document.querySelector('#sect1').id = 'fila--cartas1'
        document.querySelector('#sect2').id = 'fila--cartas2'
    }

}

function comprobarVictoria(){
let victoria = document.querySelectorAll('.correcto')
    if(victoria.length === 6){
        alert('Ganaste el Juego')
        mostrarBotonVolverAJugar()        
    }  
    
}

/*Reiniciar juego*/

function ocultarStart(){
    document.querySelector('#start').className = 'oculto'
}

function mostrarStart(){
    document.querySelector('#start').className = ''
}

/*Reinicio de Juego*/


function mostrarBotonVolverAJugar(){
    document.querySelector('#volver--a--jugar').className = ''
}

function ocultarBotonVolverAJugar(){
    document.querySelector('#volver--a--jugar').className = 'oculto'
}

function reiniciarCorrectos(){
    document.querySelectorAll('.correcto').forEach(function(item) {
        item.className = 'oculto';
      })
    

}

document.querySelector('#volver--a--jugar').onclick = function(){
    reiniciarValorComprobar()
    reiniciarCorrectos()
    ocultarBotonVolverAJugar()
    start = false
    comprobarBotonStart(start)
    mostrarStart()
}