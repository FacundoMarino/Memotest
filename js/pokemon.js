/*VARIABLES*/

let $vidaTotal = document.querySelector('#vida--total')
let $vidaMedia = document.querySelector('#vida--media')
let $vidaBaja = document.querySelector('#vida--baja')
let $pikachu = document.querySelector('#front--pikachu')
let $gengar = document.querySelector('#front--gengar')
let $mew = document.querySelector('#front--mew')
let $mewtwo = document.querySelector('#front--mewtwo')


let vidaJugador = 3
let rondaDeVida = 0
let pokemonElegido = ''
let victoria = 1
let piedraPapelTijera = ['piedra', 'papel', 'tijera']
let eleccionJugador = []
let eleccionMaquina = []

/*BOTONES*/

document.querySelector('#piedra').onclick = function(){
  comprobarPelea()  
  eleccionJugador.push('piedra')
  comprobarPelea()    
}

document.querySelector('#papel').onclick = function(){
  comprobarPelea()
  eleccionJugador.push('papel')
  comprobarPelea()
  
}

document.querySelector('#tijera').onclick = function(){
  comprobarPelea()
  eleccionJugador.push('tijera')
  comprobarPelea()
  
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
    bajarVidaMaquina()     
  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'tijera'){
    victoria++
    rondaDeVida++
    console.log('jugador gana')
    bajarVidaMaquina()   
  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'piedra'){
    victoria++
    rondaDeVida++
    console.log('jugador gana')
    bajarVidaMaquina()   
  }
  else if(eleccionMaquina[0] === eleccionJugador[0]){    
    alert('Empate')
  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'piedra'){
    vidaJugador--
    alert('Ganó la Máquina')      
  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'papel'){
    vidaJugador--
    alert('Ganó la Máquina') 
  }
  else if(eleccionMaquina[0] === 'piedra' && eleccionJugador[0] === 'tijera'){
    vidaJugador--
    alert('Ganó la Máquina') 
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
  $section.className = 'flex'
}



function manejoDeRonda() {
  
  
  comprobarVidaJugador()
  desaparecerSectionPokebolas()
  asignarBackPokemon()
  aparecerBotonesPPT()
  mezclarEleccionMaquina()  
  aparecerPokemon()
  

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
}, 1500)
}


function aparecerBotonesPPT(){
  setTimeout(() => {
  document.querySelector('#piedra').className = ''
  document.querySelector('#papel').className = ''
  document.querySelector('#tijera').className = ''
}, 1500)

}

function comprobarPelea(){
  if(eleccionJugador.length === 1 && eleccionMaquina.length === 1){
  pelea()
  }
  else{
    reiniciarElecciones()
  }
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
  manejoDeRonda()
  
}

function aparecerPokemon(){
  
  setTimeout(() => {  
  if(victoria === 1){    
    $pikachu.className = ''
  }
  else if(victoria === 4){   
    $pikachu.className = 'oculto' 
    $gengar.className = ''
  }
  else if(victoria === 7){
    $gengar.className = 'oculto'
    $mew.className = ''
  }
  else if(victoria === 10){    
    $mew.className = 'oculto'
    $mewtwo.className = ''
  }
  else if(victoria === 13){
    alert('Ganaste el juego')
    bata
  }
}, 1000)
}

function comprobarVidaJugador(){
  if(vidaJugador <= -5){
    alert('Ups perdiste todas las vidas, volvé a intentarlo')
    reiniciarJuegoPokemon()
  }
}

function reiniciarJuegoPokemon(){
  window.location.reload()

}