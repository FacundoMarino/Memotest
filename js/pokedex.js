const $pDescripcion = document.querySelector('#descripcion')
const $imgSrc = document.getElementById('img--pokedex')
let idPokemon = 0
const pikachuStorage = localStorage.getItem('Pikachu')
const mewStorage = localStorage.getItem('Mew')
const mewtwoStorage = localStorage.getItem('Mewtwo')
const gengarStorage = localStorage.getItem('Gengar')
const nombrePokedex = document.getElementById('nombre--pokedex')
const apellidoPokedex = document.getElementById('apellido--pokedex')
const edadPokedex = document.getElementById('edad--pokedex')

const pokemonSpread = ['pikachu', 'gengar', 'mew', 'mewtwo']

 
class Pokemon{
    constructor(numero, nombre, descripcion, imagen){
      this.numero = numero  
      this.nombre = nombre         
      this.imagen = imagen
      this.descripcion = descripcion          
    }        
  }

const imagenesPokemon = {
    pikachu_img: 'https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/pikachu.png',
    gengar_img: 'https://img.pokemondb.net/sprites/x-y/normal/gengar.png',
    mew_img: 'https://img.pokemondb.net/sprites/x-y/normal/mew.png',
    mewtwo_img: 'https://img.pokemondb.net/sprites/black-white/normal/mewtwo.png',
    squirtle: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.'
}

const descripcionPokemon = {
pikachu: 'Los miembros de esta especie se saludan entre sí uniendo sus colas y transmitiéndose corriente eléctrica.',
gengar: 'Sentir un escalofrío repentino es señal de que hay un Gengar cerca. Quien lo perciba puede convertirse en víctima de su maldición.',
mew: 'Es tan raro que muchos expertos opinan que es solo una ilusión. Solo unos pocos lo han visto.',
mewtwo: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
squirtle: 'Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.',
}

let {pikachu_img, gengar_img, mew_img, mewtwo_img} = imagenesPokemon

const pikachu = new Pokemon(25, 'pikachu',  descripcionPokemon.pikachu, 'pikachu_img')
const gengar = new Pokemon(94, 'gengar', descripcionPokemon.gengar, 'gengar_img')
const mew = new Pokemon(151, 'mew', descripcionPokemon.mew, 'mew_img')
const mewtwo = new Pokemon(150, 'mewtwo', descripcionPokemon.mewtwo, 'mewtwo_img')
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
    $imgSrc.src = pikachu_img
  }
    else if(idPokemon === 1){
    let pokemonStorage = JSON.parse(gengarStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = gengar_img
  }
    else if(idPokemon === 2){
    let pokemonStorage = JSON.parse(mewStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = mew_img
  }
    else if(idPokemon === 3){
    let pokemonStorage = JSON.parse(mewtwoStorage)
    $pDescripcion.textContent = pokemonStorage.descripcion  
    $imgSrc.src = mewtwo_img
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

idPokemon < 0 ? idPokemon = 0 : mostrarDescripcion()


/* SPREAD fuera del proyecto */

let objetosDePokemon ={
        ...pokemonSpread
} 
  console.log(objetosDePokemon)
