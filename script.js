import * as module from './data/pokemon.js';

const getPokeCode = (valObj) => {
    let typeStr = "";
    let typeArray = Object.values(valObj[2]);
    let type = typeArray.toString();
    if (typeArray.length != 1) {
        typeStr = valObj[1] + " is a " + typeArray[0] + " and " + typeArray[1] + " type pokemon.";
    } else {
        typeStr = valObj[1] + " is a " + type + " type pokemon.";
    }
    document.querySelector('.card-container').innerHTML += `<div class="card">
        <image class=".card__image" src="${valObj[3]}"></image>
        <div class="card__content">
          <h1 class="card__heading">${valObj[1]}</h1>
          <p class="card__text ">${typeStr}</p>
          </div>
        </div>`;
}

const getPokeman = () => {
    const valueArray = Object.values(module.pokemonArray);
    valueArray.forEach(value => {
        let valObj = Object.values(value);
        getPokeCode(valObj);
    });
};

getPokeman();