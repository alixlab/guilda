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
  let character = document.querySelector('#character');
  character.innerHTML = `
   ${dataMonsters.results.map((monster) => `
   <div class="bgcolor-item d-flex justify-content-end my-3">
   <article class="p-2 d-flex flex-column">
      <span class="name">${monster.name}</span>
        <div class="d-flex">
          <div class="info-block" >
            <section class="pt-1 d-flex flex-column">
              <span class="title"> TYPE</span>
              <span class="description">${monster.type}</span>
            </section>
            <section class="pt-3 d-flex flex-column">
              <span class="title"> ALIGNMENT</span>
              <span class="description">${monster.alignment}</span>
            </section>
          </div>
          <div class="info-block">
            <section class="pt-1 d-flex flex-column">
              <span class="title"> SIZE</span>
              <span class="description">${monster.size}</span>
            </section>
            <section class="pt-3 d-flex flex-column">
              <span class="title"> ENVIRONMENT</span>
              <span class="description">${monster.environment}</span>
            </section>
          </div>
        </div>
    </article>
    <picture class="picture-monster d-flex align-item-center">
      <img class="monster img-fluid" srcset="/img/636288206263978085.png">
    </picture>
  </div>
  `).join("")}
  `
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