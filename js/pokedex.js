const $pDescripcion = document.querySelector('#descripcion')
const $imgSrc = document.getElementById('img--pokedex')
let idPokemon = 0
const pikachuStorage = localStorage.getItem('Pikachu')
const mewStorage = localStorage.getItem('Mew')
const mewtwoStorage = localStorage.getItem('Mewtwo')
const gengarStorage = localStorage.getItem('Gengar')


class Pokemon{
    constructor(numero, nombre, descripcion, imagen){
      this.numero = numero  
      this.nombre = nombre         
      this.imagen = imagen
      this.descripcion = descripcion          
    }        
  }

const imagenesPokemon = {
pikachu: 'https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/pikachu.png',
gengar: 'https://img.pokemondb.net/sprites/x-y/normal/gengar.png',
mew: 'https://img.pokemondb.net/sprites/x-y/normal/mew.png',
mewtwo: 'https://img.pokemondb.net/sprites/black-white/normal/mewtwo.png',
squirtle: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.'
}

const descripcionPokemon = {
pikachu: 'Los miembros de esta especie se saludan entre sí uniendo sus colas y transmitiéndose corriente eléctrica.',
gengar: 'Sentir un escalofrío repentino es señal de que hay un Gengar cerca. Quien lo perciba puede convertirse en víctima de su maldición.',
mew: 'Es tan raro que muchos expertos opinan que es solo una ilusión. Solo unos pocos lo han visto.',
mewtwo: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
squirtle: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.',
}

const pikachu = new Pokemon(25, 'pikachu',  descripcionPokemon.pikachu, imagenesPokemon.pikachu)
const gengar = new Pokemon(94, 'gengar', descripcionPokemon.gengar, imagenesPokemon.gengar)
const mew = new Pokemon(151, 'mew', descripcionPokemon.mew, imagenesPokemon.mew)
const mewtwo = new Pokemon(150, 'mewtwo', descripcionPokemon.mewtwo, imagenesPokemon.mewtwo)
const squirtle = new Pokemon(7, 'squirtle', descripcionPokemon.squirtle)


function guardarPokedex(){

  for(let i = 0; i < pokemonsEnPokedex.length; i++) {

    if(pokemonsEnPokedex[i] === 'pikachu'){
      enJSON = JSON.stringify(pikachu)
    localStorage.setItem('Pikachu', enJSON)
    }
    else if(pokemonsEnPokedex[i] === 'gengar'){
      enJSON = JSON.stringify(gengar)
      localStorage.setItem('Gengar', enJSON)
    }
    else if(pokemonsEnPokedex[i] === 'mew'){
      enJSON = JSON.stringify(mew)
    localStorage.setItem('Mew', enJSON)
    }
    else if(pokemonsEnPokedex[i] === 'mewtwo'){
      enJSON = JSON.stringify(mewtwo)
      localStorage.setItem('Mewtwo', enJSON)
    }  
  }
}

function mostrarDescripcion(){  
 
  if(idPokemon === 0){
    let pokemonStorage = JSON.parse(pikachuStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion
    $imgSrc.src = imagenesPokemon.pikachu
  }
    else if(idPokemon === 1){
    let pokemonStorage = JSON.parse(gengarStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = imagenesPokemon.gengar
  }
    else if(idPokemon === 2){
    let pokemonStorage = JSON.parse(mewStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = imagenesPokemon.mew
  }
    else if(idPokemon === 3){
    let pokemonStorage = JSON.parse(mewtwoStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = imagenesPokemon.mewtwo
  }
  else{
    idPokemon = 0
  }
}


  document.querySelector('#next').onclick = function(){
  idPokemon++
  mostrarDescripcion()

}

document.querySelector('#back').onclick = function(){
  idPokemon--
  mostrarDescripcion()

}
mostrarDescripcion()