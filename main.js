import renderList from './js/renderList.js';
import getComments from './js/getComments.js';
import filterComments from './js/filterComments.js';
import cleanSearchBar from './js/cleanSearchBar.js';

const comments = await getComments([]);
const commentsList = document.querySelector('#comments');
const searchBar = document.querySelector('#search');
const cleanBarBtn = document.querySelector('#cleanSearchBar');

document.addEventListener('load', renderList(comments, commentsList));

filterComments(searchBar, commentsList, comments, renderList);
cleanSearchBar(cleanBarBtn, commentsList, comments, renderList, searchBar);
