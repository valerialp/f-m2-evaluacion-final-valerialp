'use strict';

let localStorage = [];

const inputSearchEl = document.querySelector('.search-bar');
const buttonSearchEl = document.querySelector('.btn-search');
const listResultEl = document.querySelector('.search-list');

function handlerButtonClick() {
    listResultEl.innerHTML = '';
    if (inputSearchEl.value === '') {
        showAllProgram();
    } else {
        showSearchProgram();
    }
}

buttonSearchEl.addEventListener('click', handlerButtonClick);




