function showAllProgram() {
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(function (data) {

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

            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }

            function handlerFavoriteProgram(event) {
                const resultList = event.currentTarget;
                const name = resultList.outerText;
                const image = resultList.lastChild.src;

                let object = { name: name, image: image };
                favoriteProgram.push(object);
                localStorage.setItem('fav', JSON.stringify(favoriteProgram));

                resultList.classList.toggle('favorite');

                if (resultList.classList.contains('favorite')) {

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
            }

        });
}

function showSearchProgram() {
    const inputSearchValue = inputSearchEl.value;

    fetch('http://api.tvmaze.com/search/shows?q=' + inputSearchValue)
        .then(response => response.json())
        .then(function (data) {

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

            for (let i = 0; i < arrList.length; i++) {
                arrList[i].addEventListener('click', handlerFavoriteProgram);
            }

            const favoriteProgram = [];

            function handlerFavoriteProgram(event) {
                const resultList = event.currentTarget;
                const name = resultList.outerText;
                const image = resultList.lastChild.src;

                let object = { name: name, image: image };
                favoriteProgram.push(object);
                localStorage.setItem('fav', JSON.stringify(favoriteProgram));

                resultList.classList.toggle('favorite');

                if (resultList.classList.contains('favorite')) {

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

            }
        });
}