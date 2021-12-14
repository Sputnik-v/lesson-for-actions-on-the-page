/* /* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */





/* const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}; */

//1

/*  const adv = document.querySelectorAll('.promo__adv img').forEach((item) => {
    item.remove();
});

//2

const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

//3

const backGround = document.querySelector('.promo__bg');
backGround.style.backgroundImage = 'url(../img/bg.jpg)'; */

//4  //5

/*  movieDB.movies.sort();
const films = document.querySelectorAll('.promo__interactive-item');
films.forEach((item, i) => {
   // films[i].textContent = (i + 1) + " " + movieDB.movies[i];                   //можно так!
    films[i].textContent = `${i + 1} ${movieDB.movies[i]}`;                       //но лучше так!!!
}); */
 

//const movieList = document.querySelector('.promo__interactive-list');
/* movieList.innerHTML = '';
movieDB.movies.sort(); */

/*  movieDB.movies.forEach((item, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${item}
        <div class="delete"></div>
    </li>    
    `;
});  */



//......................CСОБЫТИЯ И ОБРАБОТЧИКИ..........................//


//const btn = document.querySelector('button');       //событик клик
/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = 'yellow';
    e.target.style.color = 'black';
    console.log('click');
}); */


/* btn.addEventListener('mouseenter', (e) => {          //событиe при наведении мыши
    e.preventDefault();
    e.target.style.backgroundColor = 'red';
    console.log('hover');
}); */
/*

const logo = document.querySelector('.header__logo').addEventListener('click', (e) => {          //удаление элемента со страницы при клике
    e.target.remove();
});

  const deleted = () => {
    e.target.remove();
}                                                                                             //или сначало создаем функцию и передаем ее аргументом
const logos = document.querySelector('.header__logo');
logos.addEventListener('click', deleted);

const logoCont = document.querySelector('.header__logo');                                     //удаление обработчика событий
logoCont.removeEventListener('click', deleted); 


const position = document.querySelectorAll('.promo__menu-item');                            //постановка обработчика событий разным элементам
position.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault;
        e.target.style.color = 'red';
    });
}); 
*/


//**********************ПРАКТИКА, СОБЫТИЯ НА СТРАНИЦЕ***********************/

/*
document.addEventListener('DOMcontentLoaded', () => {

    const input = document.querySelector('.adding__input');



    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let inputText = input.value;
        if (inputText) {
            let like = document.querySelector('.check').checked;
            
            if (like) {
                console.log('Это мой любимый фильм');
            }; 
    
            if (inputText.length > 21) {
                inputText = inputText.substr(0, 21) + '...';
            };
    
            movieDB.movies.push(inputText);
            movieList.innerHTML = '';
            movieDB.movies.sort();
            movieDB.movies.forEach((item, index) => {
                movieList.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${item}
                    <div class="delete"></div>
                </li>    
                `;
            }); 
            input.value = '';
            
        }
        
    });
    
    const item = document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', (e) => {
            item.parentElement.remove();
           movieDB.movies.splice(i, 1);
        });
    });
}); */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {                         //Событие отправки формы
        event.preventDefault();

        let newFilm = addInput.value;                                       //Значение введенного пользователем input
        const favorite = checkbox.checked;                                  //Проверка чекбокса на true или false (т.е введено значение в input или нет)

        if (newFilm) {                                                      //Если введено значение, то делаем следующее...

            if (newFilm.length > 21) {                                     //Если число символов в введенном значении больше 21, то обрезаем строку до 21 символа и добавляем '...'
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {                                                 //Если чекбокс нажат то добавляем в консоль строку
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);                                   //Добавляем в наш массив введенный фильм
            sortArr(movieDB.movies);                                        //Сортируем наш массив
    
            createMovieList(movieDB.movies, movieList);                     //Создаем нашу верстку элементов на странице
        }

        event.target.reset();                                              //Обновляем нашу форму после нажатия кнопки

    });

    const deleteAdv = (arr) => {                                                        //Функция перебора для удаления элементов массива
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {                                                          //Функция изменения контента и стиля определенных элементов
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {                                                            //Функция сортировки массива
        arr.sort();
    };

    function createMovieList(films, parent) {                                             //Сортировка массива и перебор фильмов в массиве и запись элемента на странице
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {                            //Преребор элементов для удаления на странице и удаление в массиве, удаленного элемента
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);                                              
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});











