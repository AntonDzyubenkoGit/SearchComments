const renderList = (data = [], commentsList) => {
  commentsList.innerHTML = null;

  data.map((item) => {
    commentsList.innerHTML += `
      <li class="card mt-3">
        <div class="card-body">
          <span>${item.id}</span>
          <a class="card-link" href="mailto:${item.email}">${item.email}</a>
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.body}</p>
        </div>
      </li>`;
  });
};

export default renderList;
