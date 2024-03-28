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
