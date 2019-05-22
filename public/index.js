/* eslint-disable no-undef */
const firstDomain = 'https://api-beta.open5e.com/';
const secondDomain = 'http://www.dnd5eapi.co/api/';
const routes = {
  spells: firstDomain + 'spells',
  monsters: firstDomain + 'monsters',
  races: firstDomain + 'races',
  classes: firstDomain + 'classes',
  magicItems: firstDomain + 'magicitems',
  equipment: secondDomain + 'equipment',
};

function getMonsters() {
  return fetch(routes.monsters).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

async function displayMonsters() {
  let dataMonsters = await getMonsters();
  dataMonsters.results.forEach(monster => {
    templateMonsters(monster);
  });
}

function getRaces() {
  return fetch(routes.races).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

async function displayRaces() {
  let dataRaces = await getRaces();
  dataRaces.results.forEach(race => {
    templateRaces(race); 
  });
}