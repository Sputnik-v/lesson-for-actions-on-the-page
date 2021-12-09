/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1

const adv = document.querySelectorAll('.promo__adv img').forEach((item) => {
    item.remove();
});

//2

const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

//3

const backGround = document.querySelector('.promo__bg');
backGround.style.backgroundImage = 'url(../img/bg.jpg)';

//4  //5

/* movieDB.movies.sort();
const films = document.querySelectorAll('.promo__interactive-item');
films.forEach((item, i) => {
   // films[i].textContent = (i + 1) + " " + movieDB.movies[i];                   //можно так!
    films[i].textContent = `${i + 1} ${movieDB.movies[i]}`;                       //но лучше так!!!
});
 */

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((item, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${item}
        <div class="delete"></div>
    </li>    
    `;
});



//......................CСОБЫТИЯ И ОБРАБОТЧИКИ..........................//

const btn = document.querySelector('button');       //событик клик
btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = 'yellow';
    e.target.style.color = 'black';
    console.log('click');
});


btn.addEventListener('mouseenter', (e) => {          //событиe при наведении мыши
    e.preventDefault();
    e.target.style.backgroundColor = 'red';
    console.log('hover');
});

const logo = document.querySelector('.header__logo').addEventListener('click', (e) => {          //удаление элемента со страницы при клике
    e.target.remove();
});

/*  const deleted = () => {
    e.target.remove();
}                                                                                             //или сначало создаем функцию и передаем ее аргументом
const logos = document.querySelector('.header__logo');
logos.addEventListener('click', deleted);

const logoCont = document.querySelector('.header__logo');                                     //удаление обработчика событий
logoCont.removeEventListener('click', deleted); */


const position = document.querySelectorAll('.promo__menu-item');                            //постановка обработчика событий разным элементам
position.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        e.target.style.color = 'red';
    });
});