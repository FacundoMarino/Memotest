/*Simon Dice*/
let startSimon = false
let secuenciaMaquina = []
let secuenciaJugador = []
let ronda = 0

/* Start */

document.querySelector('#start--simon').onclick = function(){
    startSimon = true
    comprobarBotonStartSimon()
    ocultarStart()
    mostrarRonda()
    reiniciar()
    organizadorRonda()
}


/*Secuencia de Botones*/


function mezclarColores(){
    const $botones = document.querySelectorAll('.button')
    const indice = Math.floor(Math.random() * $botones.length)
    return $botones[indice]
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


function ocultarStart(){
    document.querySelector('#start--simon').className = 'oculto'
}
function mostrarStart(){
    document.querySelector('#start--simon').className = ''
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

    document.querySelectorAll('.button').forEach(function(item) {
        item.onclick = turnoJugador;
      })

}


function organizadorRonda(){
    desactivarBotonesMaquina()
    
    

    const $nuevoColor = mezclarColores()
    secuenciaMaquina.push($nuevoColor)

    const tiempoParaJugador = (secuenciaMaquina + 1) * 1000

    secuenciaMaquina.forEach(function(elemento, index){
        const retrasoMaquina = (index + 1) * 1000
        setTimeout(function(){
            resaltar(elemento)
        }, retrasoMaquina)  
          
    })

    setTimeout(function(){
        activarBotonesJugador()
    }, tiempoParaJugador)

    secuenciaJugador = []
    ronda++
    actualizoRonda()
    verificarRondaGanada()
}

function turnoJugador(e){
    const $boton = e.target
    resaltar($boton)
    secuenciaJugador.push($boton)

    const $colorMaquina = secuenciaMaquina[secuenciaJugador.length -1]
    if($boton.id !== $colorMaquina.id){
        perder()
        return
    }

    if(secuenciaJugador.length === secuenciaMaquina.length){
        desactivarBotonesMaquina()
        setTimeout(organizadorRonda, 1000)
    }
}


function resaltar($boton){
    $boton.style.opacity = 1;
    setTimeout(function(){
        $boton.style.opacity = 0.5
    }, 500)
}

function reiniciar(){
    secuenciaJugador = []
    secuenciaMaquina = []
}

function mostrarRonda(){
    let $pRonda = document.querySelector('#ronda')
    $pRonda.className = ''
}

function actualizoRonda(){
   let $pRonda = document.querySelector('#ronda')
    $pRonda.textContent = ronda
}

function ocultarRonda(){
    let $pRonda = document.querySelector('#ronda')
    $pRonda.className = 'oculto'
}

function perder(){
    alert('UPS te confundiste')
    mostrarStart()
    reiniciarJuego()
}

function reiniciarJuego(){
    startSimon = false
    ronda = 0
    ocultarRonda()
    comprobarBotonStartSimon()
    mostrarStart()
}

function verificarRondaGanada(){
    if(ronda === 6){
        alert('¡Felicitaciones ganaste el Juego!')
        reiniciarJuego()
        juegosGanados++
        comprobarJuegosGanadas(juegosGanados)

    }
}

function comprobarJuegosGanadas(juegosGanados){
    if(juegosGanados === 2){
        mostrarJuegoPokemon()
    }
}