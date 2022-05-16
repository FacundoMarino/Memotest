class Pokemon{
    constructor(numero, nombre, dificultadDeAtrapar, descripcion, imagen){
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