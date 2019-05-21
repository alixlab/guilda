/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function templateMonsters(monster) {
  $('#character').append(`
     <div class="bgcolor-item d-flex justify-content-end my-3">
     <article class="p-2 d-flex flex-column">
        <a class="name" id=${monster.slug} data-toggle='modal' data-target='#monsterModalLong'>${monster.name}</a>
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
                <span class="title"> LANGUAGES</span>
                <span class="description">${monster.languages}</span>
              </section>
            </div>
          </div>
      </article>
      <picture class="picture-monster d-flex align-item-center">
        <img class="monster img-fluid" srcset="/public/img/characters/${monster.slug}.png">
      </picture>
    </div>
    `);

  $(`a[id=${monster.slug}]`).click(function() {
    detailMonster(monster);
  });
}

function detailMonster(monster) {
  $('.modal-body').html(`
    <div class="bgcolor-item d-flex justify-content-end" >
      <article class="p-2 d-flex flex-column">
        <span class="name">${monster.name}</span>
        <div class="d-flex">
          <div class="info-block">
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
                <span class="title"> LANGUAGES</span>
                <span class="description">${monster.languages}</span>
            </section>
          </div>
        </div>
      </article>
      <picture class="picture-monster d-flex align-item-center" data-toggle="modal" data-target="#myModal">
        <img class="monster img-fluid" srcset="/public/img/characters/${monster.slug}.png">
      </picture>
    </div>
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <img src="/public/img/characters/${monster.slug}.png" class="picture-monster image-responsive">
          </div>
        </div>
      </div>
    </div>
    <section class="d-flex mt-3 justify-content-around">
      <div class="d-flex flex-column">
        <span class="bold mr-3">Armor Class</span>
        <span>${monster.armor_class}</span>
      </div>
      <div class="d-flex flex-column">
        <span class="bold mr-3">Hit Points</span>
        <span>${monster.hit_points}</span>
      </div>
      <div class="d-flex flex-column">
        <span class="bold">Speed</span>
        <span>Walk ${monster.speed.walk}</span>
      </div>
    </section>
    <section>
      <hr class="line">
      <section class="d-flex justify-content-around">
        <div class=" mx-3 d-flex flex-column">
          <span class="text-center bold font-color-red">STR</span>
          <span class="text-center">${monster.strength}</span>
        </div>
        <div class=" mx-3 d-flex flex-column">
          <span class="text-center bold font-color-red">DEX</span>
          <span class="text-center">${monster.dexterity}</span>
        </div>
        <div class=" mx-3 d-flex flex-column">
          <span class="text-center bold font-color-red">CON</span>
          <span class="text-center">${monster.constitution}</span>
        </div>
        <div class=" mx-3 d-flex flex-column">
          <span class="text-center bold font-color-red">INT</span>
          <span class="text-center">${monster.intelligence}</span>
        </div>
        <div class=" mx-3 d-flex mx-3  flex-column">
          <span class="text-center bold font-color-red">WIS</span>
          <span class="text-center">${monster.wisdom}</span>
        </div>
        <div class=" mx-3 d-flex mx-3  flex-column">
          <span class="text-center bold font-color-red">CHA</span>
          <span class="text-center">${monster.charisma}</span>
        </div>
        <div class=" mx-3 d-flex mx-3  flex-column">
          <span class="text-center bold font-color-red">PER</span>
          <span class="text-center">${monster.perception}</span>
        </div>
    </section>
    <hr class="line">
    </section>
    <section class="details-box mt-2 p-1" id="abilities">
      <h5 class="bold mr-3">Special Abilities</h5>
    </section>
    <section class="details-box mt-2 p-1" id="actions">
      <h5 class="bold mr-3">Actions</h5>
    </section>
    <section class="details-box mt-2 p-1" id="legendary">
      <h5 class="bold mr-3">Legendary Actions</h5>
    </section>
  `);
  
  monster.special_abilities.forEach(ability => {
    $('#abilities').append(`
    <h6 class="bold mt-2">${ability.name}</h6>
    <span>${ability.desc}</span>
    `);
  });
      
  monster.actions.forEach(action => {
    $('#actions').append(`
    <h6 class="bold mt-2">${action.name}</h6>
    <span>${action.desc}</span>
    <span>Attack Bonus: ${action.attack_bonus ? action.attack_bonus : '-----'}</span>
    <span>Damage Dice: ${action.damage_dice ? action.damage_dice : '-----'}</span>
    <span>Damage Bonus: ${action.damage_bonus ? action.damage_bonus : '-----'}</span>
    `);
  });
      
  monster.legendary_actions.forEach(legendary => {
    $('#legendary').append(`
    <h6 class="bold mt-2">${legendary.name}</h6>
    <span>${legendary.desc}</span><br>
    `);
  });
}
      
displayMonsters();