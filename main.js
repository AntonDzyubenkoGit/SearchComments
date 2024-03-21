import renderList from './js/renderList.js';
import getComments from './js/getComments.js';

const comments = await getComments([]);
renderList(comments);

const search = document.querySelector('#searching');
let value = '';

search.addEventListener('input', async (e) => {
  if (e.data) {
    value += e.data;

    const filterComments = comments.filter((post) => {
      const body = post.body.toLowerCase();
      const email = post.email.toLowerCase();
      const name = post.name.toLowerCase();

      if (
        body.includes(value.toLowerCase()) ||
        email.includes(value.toLowerCase()) ||
        name.includes(value.toLowerCase())
      ) {
        return post;
      }
    });

    document.querySelector('#comments').innerHTML = null;
    renderList(filterComments);
  } else {
    document.querySelector('#comments').innerHTML = null;
    renderList(comments);
  }
});

document.querySelector('#clearInput').addEventListener('click', () => {
  search.value = null;
  renderList(comments);
});
