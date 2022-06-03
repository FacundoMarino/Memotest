
inicar()



function cargarPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp) => resp.json()).then((pokemon) => 
    mostrarPokemon(pokemon))

}

function cargarPokemones(offset = 0){
    const pokemonsPorPagina = 7
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonsPorPagina}`)
}


function mostrarTipo(tipos){

    const $tipos = document.querySelector('#tipos')
    $tipos.innerHTML = ''

    tipos.forEach((tipo) =>{
    const $tipo = document.createElement('span')
    $tipo.className = `badge ${tipo}`
    $tipo.textContent = tipo
    $tipos.appendChild($tipo)
    })


}

function mostrarPokemon(pokemon){

    const {name, sprites: {front_default: imagenFrente}, types: tipos} = pokemon
    const $imagen = document.querySelector('#pokemon-imagen')
    const $nombre = document.querySelector('#titulo-nombre')
    $imagen.setAttribute('src', `${imagenFrente}`)
    $imagen.setAttribute('style', `height: 12rem`)

    $nombre.textContent = name
    mostrarTipo(tipos.map((item) => item.type.name))

}

function mostrarListaDePokemon(results){

    const $indice = document.getElementById('pokedexNacional')


    results.forEach(pokemon => {
        const {name, url} = pokemon
    const $link = document.createElement('a')
    $link.setAttribute('href', '#')
    $link.className = 'list-group-item list-group-item-action'
    $link.textContent = name
    $indice.appendChild($link)
    $link.addEventListener('click', ()=>{
        console.log(`${url}`)
        cargarPokemon(`${name}`)

    })
    });
    
}






function inicar(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((resp) => resp.json())
    .then((data) => {
    console.log(data)
    const {results} = data
    mostrarListaDePokemon(results)
})
}
