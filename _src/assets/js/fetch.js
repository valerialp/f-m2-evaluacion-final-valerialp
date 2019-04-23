function showAllProgram() {
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(function (data) {

            //este bucle recorre el array data para sacar el titulo e imagen de cada serie y pintarlos en la ul principal
            for (let i = 0; i < data.length; i++) {
                //sacar titulo e imagen de array
                const dataEl = data[i];
                const { name } = dataEl;

                //crear li con clase
                const li = document.createElement('li');
                li.setAttribute('class', 'list-li');
                //crea h2 con clase y titulo
                const titleH2 = document.createElement('h2');
                titleH2.setAttribute('class', 'title-program');
                const h2Content = document.createTextNode(name);
                //crear imagen con clase, alt y src
                const imageEl = document.createElement('img');
                imageEl.setAttribute('class', 'image-program');
                imageEl.setAttribute('alt', name);
                if (dataEl.image === null) {
                    const medium = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                    imageEl.setAttribute('src', medium);
                } else {
                    const { image: { medium } } = dataEl;
                    imageEl.setAttribute('src', medium);
                }

                //meter todo
                titleH2.appendChild(h2Content);
                li.appendChild(titleH2);
                li.appendChild(imageEl);
                listResultEl.appendChild(li);

            }

            const arrList = document.querySelectorAll('.list-li');

            //este bucle pone escuchadores a todas las series pintadas
            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }

            //esta funcion handler pinta en la lista de favoritos la serie selecionada ademas la da estilos distintos
            function handlerFavoriteProgram(event) {
                //hacer que todos los elementos del array sean escuchadores
                const resultList = event.currentTarget;
                const name = resultList.outerText;
                const image = resultList.lastChild.src;

                //crea un objeto con la serie favorita y la mete en el array de pelis fav
                let object = { name: name, image: image };
                favoriteProgram.push(object);
                localStorage.setItem('fav', JSON.stringify(favoriteProgram));

                //pone o quitar la clase fav
                resultList.classList.toggle('favorite');

                //si tiene la clase container se pinta en "mis series favoritas"
                if (resultList.classList.contains('favorite')) {

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
             
            }

        }
    );
}

function showSearchProgram() {
    const inputSearchValue = inputSearchEl.value;

    fetch('http://api.tvmaze.com/search/shows?q=' + inputSearchValue)
        .then(response => response.json())
        .then(function (data) {

            //este bucle recorre el array data para sacar el titulo e imagen de cada serie buacada y pintarlos en la ul principal
            for (let i = 0; i < data.length; i++) {
                //sacar titulo e imagen de array
                const dataEl = data[i];
                const { show: { name } } = dataEl;

                //crear li con clase
                const li = document.createElement('li');
                li.setAttribute('class', 'list-li');
                //crea h2 con clase y titulo
                const titleH2 = document.createElement('h2');
                titleH2.setAttribute('class', 'title-program');
                const h2Content = document.createTextNode(name);
                //crear imagen con clase, alt y href
                const imageEl = document.createElement('img');
                imageEl.setAttribute('class', 'image-program');
                imageEl.setAttribute('alt', name);

                if (dataEl.show.image === null) {
                    const medium = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                    imageEl.setAttribute('src', medium);

                } else {
                    const { show: { image: { medium } } } = dataEl;
                    imageEl.setAttribute('src', medium);

                }

                //meter todo
                titleH2.appendChild(h2Content);
                li.appendChild(titleH2);
                li.appendChild(imageEl);
                listResultEl.appendChild(li);

            }

            const arrList = document.querySelectorAll('.list-li');

            //este bucle pone escuchadores a todas las series pintadas
            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }

            const favoriteProgram = [];

            //esta funcion handler pinta en la lista de favoritos la serie selecionada ademas la da estilos distintos
            function handlerFavoriteProgram() {
                //selecionar el elemento escuchador del click
                const resultList = event.currentTarget;
                const name = resultList.outerText;
                const image = resultList.lastChild.src;

                //crea un objeto con la serie favorita y la mete en el array de pelis fav
                let object = { name: name, image: image };
                favoriteProgram.push(object);
                localStorage.setItem('fav', JSON.stringify(favoriteProgram));

                //pone o quitar la clase fav
                resultList.classList.toggle('favorite');

                //si tiene la clase container se pinta en "mis series favoritas"
                if (resultList.classList.contains('favorite')) {

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

            }
        }
    );
}