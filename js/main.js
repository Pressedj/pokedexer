//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Example fetch using pokemonapi.co
document.getElementById('cocktailer').addEventListener('click', searchCocktail)
document.getElementById('next').addEventListener('click', nextCocktail)
document.getElementById('prev').addEventListener('click', prevCocktail)

let i = 0
function getFetch() {
    let  choice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice

    fetch(url)
        .then(res => res.json()) // pasrse response as JSON
        .then(data => {
            console.log(data.drinks[i])
            val = data.drinks[i]
            document.querySelector('h2').innerHTML = val.strDrink
            document.querySelector('p').innerHTML = val.strInstructions
            document.querySelector('img').src = val.strDrinkThumb
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    return i
}

function searchCocktail() {
    i = 0
    getFetch()
    document.getElementById('info').style.display = 'block';
    return i
}

function nextCocktail() {
    i ++
    getFetch()
    return i

}

function prevCocktail() {
    if (i > 0) {
        i--
        getFetch()
    } else {
        return i
    }

}
/*function getFetch() {
    const choice = document.querySelector('img')
    const url = 'https://dog.ceo/api/breeds/image/random'

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            choice.src = data.message
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}*/

