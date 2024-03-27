import getComment from '../js/getComment.js';

const container = document.querySelector('.container');
const searchParams = new URL(document.location).searchParams;
const id = searchParams.get('id');

const comment = await getComment({}, id);

container.innerHTML = `
    <h1>${comment.name}</h1>
    <a href="mailto:${comment.email}">${comment.email}</a>
    <p>${comment.body}</p>
    <a class="btn btn-primary" href="/index.html">Go back</a>
  `;
