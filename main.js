/* 
Предлагаю разелить главный файл на блоки

Импорты
import ...

Функция запуска приложения 
const runApp = async () => {
  1. Загружаем исходные данные
  const comments = await apiService.getComments(); // не должна иметь входных параметров при запросе всех карточек

  2. Вытаскиваем ноды 
      (название ноды должно отражать функциональное назначение, 
      нужно ответить на 2 вопроса "Что это?" и "Для чего?" 
      например див в котором рендаряться карточки комментариев - commentCardsContainer
      инпут в котором вводим строку поиска - searchInput
      селект в котором выбираем email - emailsSelect )
  const commentCardsContainer = document.querySelector();
  ...
  
  3. Рендер исходных данных 
  renderCommentCards(comments, commentCardsContainer);
  ...

  4. Описание функций хендлеров 
  const handleChangeSearchInput = (event) => { ... };

  5. Подписка на экшены нод
  searchInput.addEventListener('input', handleChangeSearchInput);
  ...
}

Запуск приложения с проверкой авторизации
runWidthAuthorization(runApp);

*/

import renderList from './js/renderList.js';
import getComments from './js/getComments.js';
import filterComments from './js/filterComments.js';
import cleanSearchBar from './js/cleanSearchBar.js';
import { createSelect } from './js/createSelect.js';
import isUser from './js/isUser.js';

const comments = await getComments([]);
const commentsList = document.querySelector('#comments');
const searchBar = document.querySelector('#search');
const cleanBarBtn = document.querySelector('#cleanSearchBar');
const select = document.querySelector('#select');

if (isUser()) {
    document.addEventListener('load', renderList(comments, commentsList));

    filterComments(searchBar, commentsList, comments, renderList, select);
    cleanSearchBar(cleanBarBtn, commentsList, comments, renderList, searchBar);
    createSelect(searchBar, cleanBarBtn);
} else {
    // window.location.href = '/login';
    window.location.href = '/SearchComments/login';
}
