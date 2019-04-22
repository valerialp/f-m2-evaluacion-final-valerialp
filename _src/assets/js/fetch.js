function showAllProgram() {
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(function (data) {

            let object = {
                title: '',
                image: '',
            }

            //este bucle recorre el array data para sacar el titulo e imagen de cada serie y pintarlos en la ul principal
            for (let i = 0; i < data.length; i++) {
                //sacar titulo e imagen de array
                const dataEl = data[i];
                const { name, image: { medium } } = dataEl;

                if (dataEl.image === null) {
                    medium = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                }

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
                imageEl.setAttribute('src', medium);

                //meter todo
                titleH2.appendChild(h2Content);
                li.appendChild(titleH2);
                li.appendChild(imageEl);
                listResultEl.appendChild(li);

            }

            const arrList = document.querySelectorAll('.list-li');

            //esta funcion handler pinta en la lista de favoritos la serie selecionada ademas la da estilos distintos
            function handlerFavoriteProgram() {
                const [{name, image:{medium}}] = data;

                if (data.image === null) {
                    medium = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                }

                //recoger ul-fav
                const listFavEl = document.querySelector('.fav-list');
                //hacer que todos los elementos del array sean escuchadores
                const liFav = event.currentTarget;
                //pone o quitar la clase fav
                liFav.classList.toggle('favorite');

                //si tiene la clase container se pinta en "mis series favoritas"
                if (liFav.classList.contains('favorite')) {

                    //crear li-fav con clase
                    const liFav = document.createElement('li');
                    liFav.setAttribute('class', 'list-li-fav');
                    //crea h2-fav con clase y titulo                  
                    const titleH2Fav = document.createElement('h2');
                    titleH2Fav.setAttribute('class', 'title-program-fav');
                    const h2ContentFav = document.createTextNode(name);
                    //crear imagen-fav con clase, alt y src
                    const imageElFav = document.createElement('img');
                    imageElFav.setAttribute('class', 'image-program-fav');
                    imageElFav.setAttribute('alt', name);
                    imageElFav.setAttribute('src', medium);

                    //meter todo
                    titleH2Fav.appendChild(h2ContentFav);
                    liFav.appendChild(titleH2Fav);
                    liFav.appendChild(imageElFav);
                    listFavEl.appendChild(liFav);
                    console.log(liFav);

                }
            }

            //este bucle pone escuchadores a todas las series pintadas
            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }
        }
    );
}

function showSearchProgram() {
    const inputSearchValue = inputSearchEl.value;

    fetch('http://api.tvmaze.com/search/shows?q=' + inputSearchValue)
        .then(response => response.json())
        .then(function (data) {

            let object = {
                title: '',
                image: '',
            }
            
            //este bucle recorre el array data para sacar el titulo e imagen de cada serie y pintarlos en la ul principal
            for (let i = 0; i < data.length; i++) {
                //sacar titulo e imagen de array
                const dataEl = data[i];
                const { show: { name,image: {medium} } } = dataEl;

                if (dataEl.image === null) {
                    medium = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
                }


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
                imageEl.setAttribute('src', medium);
                if (image === null) {
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

            //esta funcion handler pinta en la lista de favoritos la serie selecionada ademas la da estilos distintos
            function handlerFavoriteProgram() {
                //recoger ul-fav
                const listFavEl = document.querySelector('.fav-list');
                //hacer que todos los elementos del array sean escuchadores
                const liFav = event.currentTarget;
                //pone o quitar la clase fav
                liFav.classList.toggle('favorite');

                //si tiene la clase container se pinta en "mis series favoritas"
                if (liFav.classList.contains('favorite')) {

                    //crear li-fav con clase
                    const liFav = document.createElement('li');
                    liFav.setAttribute('class', 'list-li-fav');
                    //crea h2-fav con clase y titulo                  
                    const titleH2Fav = document.createElement('h2');
                    titleH2Fav.setAttribute('class', 'title-program-fav');
                    const h2ContentFav = document.createTextNode(name);
                    //crear imagen-fav con clase, alt y src
                    const imageElFav = document.createElement('img');
                    imageElFav.setAttribute('class', 'image-program-fav');
                    imageElFav.setAttribute('alt', name);
                    // imageElFav.setAttribute('src', medium);

                    //meter todo
                    titleH2Fav.appendChild(h2ContentFav);
                    liFav.appendChild(titleH2Fav);
                    liFav.appendChild(imageElFav);
                    listFavEl.appendChild(liFav);
                    console.log(liFav);
                }

                localStorage.setItem('title', titleH2);
                localStorage.setItem('image', imageEl.src);
            }

            //este bucle pone escuchadores a todas las series pintadas
            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }
        }
    );
}