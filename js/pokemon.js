let dado = [1,2,3,4,5,6,7,8,9,10]
let nombresDePokemon = ['pikachu', 'gengar', 'mew', 'mewtwo', 'squirtle']
let pokemonElegido = ''
let piedraPapelTijera = ['piedra', 'papel', 'tijera']
let eleccionJugador = []
let eleccionMaquina = []


class Pokemon{
        constructor(numero, nombre, dificultadDeAtrapar, descripcion){
          this.numero = numero  
          this.nombre = nombre            
          this.dificultadDeAtrapar = dificultadDeAtrapar
          this.descripcion = descripcion
        }        
      }
  
const descripcionPokemon = {
  pikachu: 'Los miembros de esta especie se saludan entre sí uniendo sus colas y transmitiéndose corriente eléctrica.',
  gengar: 'Sentir un escalofrío repentino es señal de que hay un Gengar cerca. Quien lo perciba puede convertirse en víctima de su maldición.',
  mew: 'Es tan raro que muchos expertos opinan que es solo una ilusión. Solo unos pocos lo han visto.',
  mewtwo: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
  squirtle: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.',
}
    
const pikachu = new Pokemon(25, 'pikachu', dado, descripcionPokemon.pikachu)
const gengar = new Pokemon(94, 'gengar', dado, descripcionPokemon.gengar)
const mew = new Pokemon(151, 'mew', dado, descripcionPokemon.mew)
const mewtwo = new Pokemon(150, 'mewtwo', dado, descripcionPokemon.mewtwo)
const squirtle = new Pokemon(7, 'squirtle', dado, descripcionPokemon.squirtle)



function pelea(){
  if(eleccionMaquina[0] === 'piedra' && eleccionJugador[0] === 'papel'){
    console.log('jugador gana')        
  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'tijera'){
    console.log('jugador gana')
  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'piedra'){
    console.log('jugador gana')
  }
  else if(eleccionMaquina[0] === eleccionJugador[0]){
    console.log('empate')
  }
  else if(eleccionMaquina[0] === 'papel' && eleccionJugador[0] === 'piedra'){
    console.log('maquina gana')        
  }
  else if(eleccionMaquina[0] === 'tijera' && eleccionJugador[0] === 'papel'){
    console.log('maquina gana')
  }
  else if(eleccionMaquina[0] === 'piedra' && eleccionJugador[0] === 'tijera'){
    console.log('maquina gana')
  } 
}

/*BOTONES*/

document.querySelector('#piedra').onclick = function(){
    eleccionJugador.push('piedra')
}

document.querySelector('#papel').onclick = function(){
  eleccionJugador.push('papel')
}

document.querySelector('#tijera').onclick = function(){
  eleccionJugador.push('tijera')
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
    



/*Funciones*/

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

}

function aparecerSquirtle(){
  $pokebolaSquirtle = document.querySelector('#squirtle')
  $pokebolaSquirtle.className = 'oculto'
  $squirtle = document.querySelector('#squirtle--pokemon')
  $squirtle.className = ''
  aparecer($squirtle)

}

function aparecerBulbasaur(){
  $pokebolaBulbasaur = document.querySelector('#bulbasaur')
  $pokebolaBulbasaur.className = 'oculto'
  $bulbasaur = document.querySelector('#bulbasaur--pokemon')
  $bulbasaur.className = ''
  aparecer($bulbasaur)
}

function aparecer(value){
  setTimeout(function(){
    value.style.opacity = 1
}, 700)
}

function mostrarJuegoPokemon(){
  let $section = document.querySelector('#pokemon')
  $section.className = 'flex'
}

