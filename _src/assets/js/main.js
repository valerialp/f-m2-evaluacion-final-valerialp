'use strict';

const favoriteProgram = [];



const inputSearchEl = document.querySelector('.search-bar');
const buttonSearchEl = document.querySelector('.btn-search');
const listResultEl = document.querySelector('.search-list');
const listFavEl = document.querySelector('.fav-list');


function handlerButtonClick() {
    listResultEl.innerHTML = '';
    if (inputSearchEl.value === '') {
        showAllProgram();
    } else {
        showSearchProgram();
    }
}

buttonSearchEl.addEventListener('click', handlerButtonClick);




