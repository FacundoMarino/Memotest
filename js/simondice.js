/*Simon Dice*/
let $botonRed = document.querySelector('.red')
let $botonYellow = document.querySelector('.yellow')
let $botonGreen = document.querySelector('.green')
let $botonBlue = document.querySelector('.blue')

let startSimon = false
let coloresDeBotones = ['red','yellow','blue','yellow']
let secuenciaMaquina = []
let secuenciaJugador = []

/*BOTONES*/



document.querySelector('.red').onclick = function(){
    secuenciaJugador.push('red')
}

document.querySelector('.yellow').onclick = function(){
    secuenciaJugador.push('yellow')
}

document.querySelector('.green').onclick = function(){
    secuenciaJugador.push('green')
}

document.querySelector('.blue').onclick = function(){
    secuenciaJugador.push('blue')
}

document.querySelector('#start--simon').onclick = function(){
    startSimon = true
    comprobarBotonStartSimon()
    ocultarStart()
    turnoMaquina()
}

document.querySelector('#entregar--simon').onclick = function(){
    corroborarAcierto()
}

/*Secuencia de Botones*/




function mezclarColores(){
    coloresDeBotones.sort(()=> Math.random() - 0.5)
    console.log(coloresDeBotones)
}

// function asignarSecuenciaMaquina(){
//     secuenciaMaquina.push(coloresDeBotones[0])
// }

function mostrarSecuencia(){
    for(let i = 0; i < coloresDeBotones.length; i++){
        if(coloresDeBotones[i] === 'red'){
            setTimeout($botonRed.className = 'blink_me', 100)
        }
        else if(coloresDeBotones[i] === 'yellow'){
            setTimeout($botonYellow.className = 'blink_me', 100)
        }
        else if(coloresDeBotones[i] === 'green'){
            setTimeout($botonGreen.className = 'blink_me', 100)
        }
        else if(coloresDeBotones[i] === 'blue'){
            setTimeout($botonBlue.className = 'blink_me', 100)
        }
    }
}

function comprobarBotonStartSimon(){
    if(startSimon === true){
        document.querySelector('#fila--botones1').id = 'btn1'
        document.querySelector('#fila--botones2').id = 'btn2'
    }else{
        document.querySelector('#btn1').id = 'fila--botones1'
        document.querySelector('#btn2').id = 'fila--botones2'
    }

}


function corroborarAcierto(){

    for(let i = 0; i < secuenciaMaquina.length; i++){

        if(secuenciaMaquina[i] === secuenciaJugador[i]){
            
        }
    }
}

function ocultarStart(){
    document.querySelector('#start--simon').className = 'oculto'
}


function desactivarBotonesMaquina(){

    document.querySelectorAll('button').forEach(function(item) {
        item.disabled = true;
      })

}

function activarBotonesJugador(){

    document.querySelectorAll('button').forEach(function(item) {
        item.disabled = false;
      })

}

function monstrarBotonEntregar(){
    document.querySelector('#entregar--simon').className = ''
}

function ocultarBotonEntregar(){
    document.querySelector('#entregar--simon').className = 'oculto'
}



function turnoMaquina(){
    desactivarBotonesMaquina()
    mezclarColores()    
    mostrarSecuencia()
    turnoJugador()
}

function turnoJugador(){
    activarBotonesJugador()
    monstrarBotonEntregar()
}