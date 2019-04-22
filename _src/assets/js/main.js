'use strict';

console.log('>> Ready');

const inputSearchEl = document.querySelector('.search-bar');
const buttonSearchEl = document.querySelector('.btn-search');
const listResultEl = document.querySelector('.search-list');

function handlerButtonClick() {
    if (inputSearchEl.value === '') {
        showAllProgram();
    } else {
        showSearchProgram();
    }

    //     const arrList = document.querySelectorAll('.news__item');

}
buttonSearchEl.addEventListener('click', handlerButtonClick);