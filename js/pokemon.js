  /*VARIABLES*/

let $resultadoBatalla = document.querySelector('#parrafo--batalla')
let $vidaTotal = document.querySelector('#vida--total')
let $vidaMedia = document.querySelector('#vida--media')
let $vidaBaja = document.querySelector('#vida--baja')
let $pikachu = document.querySelector('#front--pikachu')
let $gengar = document.querySelector('#front--gengar')
let $mew = document.querySelector('#front--mew')
let $mewtwo = document.querySelector('#front--mewtwo')
let $resultadoMaquina = document.querySelector('#seleccion--maquina')

let pokemonsEnPokedex = []
let vidaJugador = 3
let rondaDeVida = 0
let pokemonElegido = ''
let victoria = 1
let piedraPapelTijera = ['piedra', 'papel', 'tijera']
let eleccionJugador = []
let eleccionMaquina = []

/*BOTONES*/

document.querySelector('#piedra').onclick = function(){  
  reiniciarElecciones()
  eleccionJugador.push('piedra')
  manejoDeRonda()
  
}

document.querySelector('#papel').onclick = function(){
  reiniciarElecciones()
  eleccionJugador.push('papel')
  manejoDeRonda()
  
}

document.querySelector('#tijera').onclick = function(){
  reiniciarElecciones()
  eleccionJugador.push('tijera')
  manejoDeRonda()
  
}

document.querySelector('#charmander').onclick = function(){
pokemonElegido = 'charmander'
comprobarPokemon(pokemonElegido)
}

document.querySelector('#squirtle').onclick = function(){
  pokemonElegido = 'squirtle'
  comprobarPokemon(pokemonElegido)
  }
  
  document.querySelector('#bulbasaur').onclick = function(){
    pokemonElegido = 'bulbasaur'
    comprobarPokemon(pokemonElegido)
    }
    

/*Funciones */


function pelea(){
  if(eleccionMaquina[0] === 'piedra' && eleccionJugador[0] === 'papel'){
    victoria++
    rondaDeVida++
    mostrarResultadoMaquina()
    bajarVidaMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganaste'

  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'tijera'){
    victoria++
    rondaDeVida++
    mostrarResultadoMaquina()   
    bajarVidaMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganaste'

  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'piedra'){
    victoria++
    rondaDeVida++
    mostrarResultadoMaquina()  
    bajarVidaMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganaste'
  }
  else if(eleccionMaquina[0] === eleccionJugador[0]){    
    mostrarResultadoMaquina()
    document.getElementById('resultado--batalla').innerText = 'Empate'
    
  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'piedra'){
    vidaJugador--
    mostrarResultadoMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganó la Máquina'
          
  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'papel'){
    vidaJugador--
    mostrarResultadoMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganó la Máquina'
   
  }
  else if(eleccionMaquina[0] === 'piedra' && eleccionJugador[0] === 'tijera'){
    vidaJugador--
    mostrarResultadoMaquina()
    document.getElementById('resultado--batalla').innerText = 'Ganó la Máquina'
    
  } 
}

function mezclarEleccionMaquina(){
  let mezcla = piedraPapelTijera.sort(()=> Math.random() - 0.5)
  eleccionMaquina.push(mezcla[0])
}

function comprobarPokemon(value){
  if(value === 'charmander'){    
    aparecerCharmander()
  }
  else if(value === 'squirtle'){
    aparecerSquirtle()
  }
  else if(value === 'bulbasaur'){
    aparecerBulbasaur()
  }
}

function aparecerCharmander(){

  $pokebolaCharmander = document.querySelector('#charmander')
  $pokebolaCharmander.className = 'oculto'
  $charmander = document.querySelector('#charmander--pokemon')
  $charmander.className = ''
  aparecer($charmander)
  manejoDeRonda()
  

}

function aparecerSquirtle(){
  $pokebolaSquirtle = document.querySelector('#squirtle')
  $pokebolaSquirtle.className = 'oculto'
  $squirtle = document.querySelector('#squirtle--pokemon')
  $squirtle.className = ''  
  aparecer($squirtle)
  manejoDeRonda()

}

function aparecerBulbasaur(){
  $pokebolaBulbasaur = document.querySelector('#bulbasaur')
  $pokebolaBulbasaur.className = 'oculto'
  $bulbasaur = document.querySelector('#bulbasaur--pokemon')
  $bulbasaur.className = ''
  aparecer($bulbasaur)
  manejoDeRonda()
}

function aparecer(value){
  setTimeout(function(){
    value.style.opacity = 1
    $vidaTotal.style.opacity = 1
}, 700)
}

function mostrarJuegoPokemon(){
  let $section = document.querySelector('#pokemon')
  let $pokedex = document.querySelector('#nav--pokedex')
  $section.className = 'flex'
  $pokedex.className = ''
}



function manejoDeRonda() {  
  
  mostrarResultado()
  comprobarVidaJugador()
  desaparecerSectionPokebolas()
  asignarBackPokemon()
  aparecerBotonesPPT()
  mezclarEleccionMaquina() 
  aparecerPokemon()
  pelea()
  guardarPokedex()

}

function desaparecerSectionPokebolas(){
  setTimeout(() => {
  let $sectionBatalla =  document.querySelector('#pokemon')
  $sectionBatalla.className = 'oculto'
}, 1000)
}


function asignarBackPokemon(){
  setTimeout(() => {
if(pokemonElegido === 'charmander'){
  let $backCharmander = document.querySelector('#back--charmander')
  $backCharmander.className = ''
}
else if(pokemonElegido === 'squirtle'){
  let $backCharmander = document.querySelector('#back--squirtle')
  $backCharmander.className = ''
}
else if(pokemonElegido === 'bulbasaur'){
  let $backCharmander = document.querySelector('#back--bulbasaur')
  $backCharmander.className = ''
}
}, 1200)
}


function aparecerBotonesPPT(){
  setTimeout(() => {
  document.querySelector('#piedra').className = ''
  document.querySelector('#papel').className = ''
  document.querySelector('#tijera').className = ''
}, 1200)

}

function bajarVidaMaquina(){
  if(rondaDeVida === 1){   
    $vidaTotal.style.opacity = 0
    $vidaMedia.style.opacity = 1
  }
  else if(rondaDeVida === 2){
    $vidaMedia.style.opacity = 0
    $vidaBaja.style.opacity = 1
  }
  else if(rondaDeVida === 3){
    $vidaBaja.style.opacity = 0
    $vidaTotal.style.opacity = 1
    rondaDeVida = 0
  }
}

function reiniciarElecciones(){
  eleccionJugador = []
  eleccionMaquina = []
  
}

function aparecerPokemon(){
  
  setTimeout(() => {  
  if(victoria === 1){    
    $pikachu.className = ''
    pokemonsEnPokedex.push('pikachu')
  }
  else if(victoria === 4){   
    $pikachu.className = 'oculto' 
    $gengar.className = ''
    pokemonsEnPokedex.push('gengar')
  }
  else if(victoria === 7){
    $gengar.className = 'oculto'
    $mew.className = ''
    pokemonsEnPokedex.push('mew')
  }
  else if(victoria === 10){    
    $mew.className = 'oculto'
    $mewtwo.className = ''
    pokemonsEnPokedex.push('mewtwo')
  }
  else if(victoria === 13){
    Swal.fire({
      icon: 'success',
      title: '¡Felicidades!',
      text: '¡Ganaste el juego!',            
    })
  }
}, 1000)
}

function comprobarVidaJugador(){
  if(vidaJugador <= -5){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Perdiste todas tus vidas',      
    })
    reiniciarJuegoPokemon()
  }
}

function reiniciarJuegoPokemon(){
  setTimeout(() => {window.location.reload()}, 2000)

}

function mostrarResultadoMaquina(){
  $resultadoMaquina.textContent = eleccionMaquina
}

function mostrarResultado(){
  setTimeout(() => {
    let $parrafoSeleccion = document.querySelector('#parrafo--seleccion')
    $parrafoSeleccion.className = ''
    $resultadoBatalla.className = ''
  
  },1500)
}


