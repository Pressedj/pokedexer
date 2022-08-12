//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Example fetch using pokemonapi.co
document.getElementById('poke').addEventListener('click', getFetch)
/*document.getElementById('next').addEventListener('click', nextCocktail)
document.getElementById('prev').addEventListener('click', prevCocktail)*/

/*let i = 0
*/
function getFetch() {
    let choice = document.querySelector('input').value
    const url1 = 'https://pokeapi.co/api/v2/pokemon/' + choice
    const url2 = 'https://pokeapi.co/api/v2/pokemon-species/' + choice
    fetch(url1)
        .then(res => res.json()) // pasrse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerHTML = data.name
            document.querySelector('img').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png"
            document.getElementById('type').innerHTML = data.types[0].type.name + '-type Pokemon'
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    fetch(url2)
        .then(res => res.json()) // pasrse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('p').innerHTML = data.flavor_text_entries[0].flavor_text
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

/*    function searchCocktail() {
        i = 0
        getFetch()
        document.getElementById('info').style.display = 'block';
        return i
    }
*/
/*function nextCocktail() {
    i ++
    getFetch()
    return i

}*/

/*function prevCocktail() {
    if (i > 0) {
        i--
        getFetch()
    } else {
        return i
    }

}
*/
