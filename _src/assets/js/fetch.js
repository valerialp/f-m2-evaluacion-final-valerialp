function showAllProgram() {
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                //sacar titulo e imagen de array
                const dataEl = data[i];
                const { name, image: { medium } } = dataEl;

                if (medium === null) {
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

                //meter todo
                titleH2.appendChild(h2Content);
                li.appendChild(titleH2);
                li.appendChild(imageEl);
                listResultEl.appendChild(li);

            }
        });
}

function showSearchProgram(){
    const inputSearchValue = inputSearchEl.value;

    fetch('http://api.tvmaze.com/search/shows?q='+ inputSearchValue)
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            //sacar titulo e imagen de array
            const dataEl = data[i];
            const { show: {name, image: { medium }} } = dataEl;

            if (medium === null) {
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

            //meter todo
            titleH2.appendChild(h2Content);
            li.appendChild(titleH2);
            li.appendChild(imageEl);
            listResultEl.appendChild(li);

        }
    });
}