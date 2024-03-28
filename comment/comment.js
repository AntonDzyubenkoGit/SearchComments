import getComment from '../js/getComment.js';
import isUser from '../js/isUser.js';

const container = document.querySelector('.container');
const searchParams = new URL(document.location).searchParams;
const id = searchParams.get('id');

if (isUser()) {
  const comment = await getComment({}, id);

  container.innerHTML = `
    <h1>${comment.name}</h1>
    <a href="mailto:${comment.email}">${comment.email}</a>
    <p>${comment.body}</p>
    <a class="btn btn-primary" href="/SearchComments">Go back</a>
  `;
} else {
  // window.location.href = '/login';
  window.location.href = '/SearchComments/login';
}

/*
    <a class="btn btn-primary" href="/">Go back</a>
   <a class="btn btn-primary" href="/SearchComments">Go back</a>
*/
