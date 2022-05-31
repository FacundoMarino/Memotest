
inicar()


function mostrarNombrePokemon(results){

    const $indice = document.getElementById('pokedexNacional')


    results.forEach(pokemon => {
        const {name, url} = pokemon
    const $link = document.createElement('a')
    $link.setAttribute('href', '#')
    $link.textContent = name
    $indice.appendChild($link)
    });


}






function inicar(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then((resp) => resp.json())
    .then((data) => {
    console.log(data)
    const {results} = data
    mostrarNombrePokemon(results)
})
}
