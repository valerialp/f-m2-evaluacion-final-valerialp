'use strict';
console.log(localStorage.getItem('fav'))


let favoriteProgram = [];
console.log(favoriteProgram)

favoriteProgram = JSON.parse(localStorage.getItem('fav'));
console.log(favoriteProgram)
// if(favoriteProgram == null){
//     favoriteProgram = [];
//     console.log(favoriteProgram);
//     console.log(localStorage.getItem('fav'))
// }

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




