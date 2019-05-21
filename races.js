/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function clearObj(race) {
  Object.keys(race).forEach(function(key) {
    if (typeof race[key] === 'string') {
      race[key] = race[key].replace(/\*\*[^*]*\*\*/g, '');
    }
  });
}

function clearText(text) {
  return text.replace(/\*\*[^*]*\*\*/g, '');
}

function templateRaces(race) {
  $('#races').append(`
<div class="bgcolor-item d-flex justify-content-end">
    <article class="p-2 d-flex flex-column">
        <span class="name" id=${race.name}>${race.name}</span>
        <div class="d-flex">
            <div class="info-block" >
                <section>
                    <span class="description">${race.desc.replace(/#/g, '')}</span>
                </section>
            </div>
        </div>
    </article>
    <picture class="picture-monster d-flex align-item-center">
        <img class="monster img-fluid" srcset="/img/636288206263978085.png">
    </picture>
</div>
`);

  $(`span[id=${race.name}]`).click(function() {
    $('#races').empty();
    detailRace(race);
  });
}

function detailRace(race) {
  clearObj(race);
  $('#races').append(`
    <div class="bgcolor-item d-flex justify-content-end">
      <article class="p-2 d-flex flex-column">
        <span class="name">${race.name}</span>
          <div class="d-flex">
            <div class="info-block">
              <section class="pt-1 d-flex flex-column">
                <span class="description">${race.desc.replace(/#/g, '')}</span>
              </section>
            </div>
          </div>
      </article>
      <picture class="picture-monster d-flex align-item-center" data-toggle="modal" data-target="#myModal">
        <img class="monster img-fluid" srcset="/img/636288206263978085.png">
      </picture>
    </div>
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <img src="/img/636288206263978085.png" class="picture-monster image-responsive">
          </div>
        </div>
      </div>
    </div>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Ability Score Increase</h5>
      <span class="description">${race.asi_desc}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Alignment</h5>
      <span class="description">${race.alignment}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Age</h5>
      <span class="description">${race.age}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Size</h5>
      <span class="description">${race.size}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Speed</h5>
      <span class="description">${race.speed_desc}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Languages</h5>
      <span class="description">${race.languages}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Vision</h5>
      <span class="description">${race.vision}</span>  
    </section>
    <section class="details-box mt-2">
      <h5 class="bold mr-3">Traits</h5>
      <span class="description">${race.traits}</span>  
    </section>
    <section class="details-box mt-2" id="subraces">
      <h5 class="bold mr-3">Subraces</h5>
    </section>
  `);
  
  race.subraces.forEach(subrace => {
    $('#subraces').append(`
    <h6 class="bold">${subrace.name}</h6>
    <span class="description">${subrace.desc.replace(/#/g, '')}</span>
    <br>
    <span class="description">${clearText(subrace.asi_desc)}</span>
    `);
  });
}

displayRaces();