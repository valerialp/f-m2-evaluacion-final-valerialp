
for (let i = 0; i < favoriteProgram.length; i++) {
  const favoriteProgramEl = favoriteProgram[i];
  const { name } = favoriteProgramEl;
  const { image } = favoriteProgramEl;

  //crear li-fav con clase
  const liFav = document.createElement('li');
  liFav.setAttribute('class', 'list-li-fav');
  //crea h2-fav con clase y titulo                  
  const titleH2Fav = document.createElement('h2');
  titleH2Fav.setAttribute('class', 'title-program-fav');
  // const h2ContentFav = document.createElement(name);
  //crear imagen-fav con clase, alt y src
  const imageElFav = document.createElement('img');
  imageElFav.setAttribute('class', 'image-program-fav');
  imageElFav.setAttribute('alt', name);
  imageElFav.setAttribute('src', image);
  //crear boton reset
  const btnResetEl = document.createElement('button')
  btnResetEl.setAttribute('type', 'button');
  btnResetEl.setAttribute('class', 'btn-reset');

  //meter todo
  titleH2Fav.innerHTML = name;
  liFav.appendChild(titleH2Fav);
  liFav.appendChild(btnResetEl);
  liFav.appendChild(imageElFav);
  listFavEl.appendChild(liFav);
}

const btnReset = document.querySelectorAll('.btn-reset');
console.log(btnReset)

for (let i = 0; i < btnReset.length; i++) {
  btnReset[i].addEventListener('click', handlerButtonReset);
}

function handlerButtonReset(event) {
  const mother = event.currentTarget.parentElement;
  mother.remove();
}
