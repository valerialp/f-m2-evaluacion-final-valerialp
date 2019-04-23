for (let i = 0; i < favoriteProgram.length; i++) {
  const favoriteProgramEl = favoriteProgram[i];
  const { name } = favoriteProgramEl;
  const { image } = favoriteProgramEl;

  const liFav = document.createElement('li');
  liFav.setAttribute('class', 'list-li-fav');
  const titleH2Fav = document.createElement('h2');
  titleH2Fav.setAttribute('class', 'title-program-fav');
  const imageElFav = document.createElement('img');
  imageElFav.setAttribute('class', 'image-program-fav');
  imageElFav.setAttribute('alt', name);
  imageElFav.setAttribute('src', image);
  const btnResetEl = document.createElement('button')
  btnResetEl.setAttribute('type', 'button');
  btnResetEl.setAttribute('class', 'btn-reset');

  titleH2Fav.innerHTML = name;
  liFav.appendChild(titleH2Fav);
  liFav.appendChild(btnResetEl);
  liFav.appendChild(imageElFav);
  listFavEl.appendChild(liFav);
}

const btnReset = document.querySelectorAll('.btn-reset');

for (let i = 0; i < btnReset.length; i++) {
  btnReset[i].addEventListener('click', handlerButtonReset);
}

function handlerButtonReset(event) {
  const mother = event.currentTarget.parentElement;
  mother.remove();
  for (let i = 0; i < favoriteProgram.length; i++) {
    const favoriteProgramEl = favoriteProgram[i];
    const { name } = favoriteProgramEl;

    if( name === mother.firstChild.innerHTML){
      console.log(favoriteProgram[i]);
      const index = favoriteProgram.indexOf(favoriteProgram[i]);
      favoriteProgram.splice(index,1);
      localStorage.setItem('fav', JSON.stringify(favoriteProgram));
    }
  }
}
