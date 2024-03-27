const renderList = (data = [], commentsList) => {
  commentsList.innerHTML = null;

  data.map((item) => {
    commentsList.innerHTML += `
      <li class="card mt-3">
        <div class="card-body">
          <a class="card-link" href="mailto:${item.email}" id="email">${item.email}</a>
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.body}</p>
          <a href="/SearchComments/comment/index.html?id=${item.id}" class="btn btn-primary mt-3">Go somewhere</a>
        </div>
      </li>`;
  });
};

export default renderList;
