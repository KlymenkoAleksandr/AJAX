// Задание 1:

// Сделать GET запрос на 'http://jsonplaceholder.typicode.com/posts'
// и вывести полученные данные удобно читаемым HTML кодом.

let ajax = document.getElementById('ajax');

function upadateAjax() {
    let request = new XMLHttpRequest();
    let URL = 'https://jsonplaceholder.typicode.com/posts';

    request.open('GET', URL);
    request.send();

    request.addEventListener('load', function () {
        let data = JSON.parse(request.response);
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            let userId = data[i].userId;
            let id = data[i].id;
            let title = data[i].title;
            let text = data[i].body;
            div.innerHTML = `
                <p>userId: ${userId}</p>
                <p>Id: ${id}</p>
                <p>title: ${title}</p>
                <p>body: ${text}</p>
            `;
            ajax.append(div);
        }
    })
}

upadateAjax();


// Задание 2:

// Выполнить GET запрос на http://jsonplaceholder.typicode.com/photos?_start=0&_end=30
// и вывести картинка + описание на экран в виде адаптивнйо галереи (можно использовать бутстрап)

let gallery = document.getElementById('gallery');

function updateGallery() {
    let request = new XMLHttpRequest();
    let URL = 'https://jsonplaceholder.typicode.com/photos?_start=0&_end=30';

    request.open('GET', URL);
    request.send();

    request.addEventListener('load', function() {
        let data = JSON.parse(request.response);
        for (let i = 0; i < data.length; i++) {

            let  div = document.createElement('div');
            div.classList.add('gallery-item');
            div.style.width = '250px';

            let img = document.createElement('img');
            img.src = data[i].thumbnailUrl;

            let title = document.createElement('h3');
            title.innerText = data[i].title;

            div.append(img);
            div.prepend(title);

            gallery.append(div);
        }
    })
}

updateGallery();
