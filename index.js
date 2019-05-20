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

function getSpells() {
  return fetch(routes.spells).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

function getMonsters() {
  return fetch(routes.monsters).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

function centerModal() {
  $(this).css('display', 'block');
  let $dialog = $(this).find('.modal-dialog');
  let offset = ($(window).height() - $dialog.height()) / 2;
  // Center modal vertically in window
  $dialog.css('margin-top', offset);
}

$('.modal').on('show.bs.modal', centerModal);

$(window).on('resize', function() {
  $('.modal:visible').each(centerModal);
});

async function displayMonsters() {
  let dataMonsters = await getMonsters();
  console.log(dataMonsters);  
}
  
function getRaces() {
  return fetch(routes.races).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

function getClasses() {
  return fetch(routes.classes).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

function getMagicItems() {
  return fetch(routes.magicItems).then(response => response.json()).catch(error => {
    console.log(error);
  });
}

function getEquipment() {
  return fetch(routes.equipment).then(response => response.json()).catch(error => {
    console.log(error);
  });
}