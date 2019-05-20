const firstDomain = 'https://api-beta.open5e.com/';
const secondDomain = 'http://www.dnd5eapi.co/api/';
const routes = {
    spells: firstDomain + 'spells',
    monsters: firstDomain + 'monsters',
    races: firstDomain + 'races',
    classes: firstDomain + 'classes',
    magicItems: firstDomain + 'magicitems',
    equipment: secondDomain + 'equipment'
}

function getData(route) {
    return fetch(route)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
}

let data = getData(routes.spells);
console.log(data);