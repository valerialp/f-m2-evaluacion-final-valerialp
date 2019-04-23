const saveFav = JSON.parse(localStorage.getItem('fav'));
console.log(saveFav)

for (let i = 0; i < saveFav.length; i++) {
    console.log('hola')
    const saveFavEl = saveFav[i];
    const { name } = saveFavEl;
    const { image } = saveFavEl;

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

  //meter todo
  titleH2Fav.innerHTML = name;
  liFav.appendChild(titleH2Fav);
  liFav.appendChild(imageElFav);
  listFavEl.appendChild(liFav);
  
  
}

