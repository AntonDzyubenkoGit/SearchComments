const filterComments = (searchBar, commentsList, comments, renderList, select) => {
  let currentComments;

  searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.trim();

    if (searchValue) {
      currentComments = comments.filter((post) => {
        const body = post.body.toLowerCase();
        const email = post.email.toLowerCase();
        const name = post.name.toLowerCase();

        if (
          body.includes(searchValue.toLowerCase()) ||
          email.includes(searchValue.toLowerCase()) ||
          name.includes(searchValue.toLowerCase())
        ) {
          return post;
        }
      });
    }

    searchValue ? renderList(currentComments, commentsList) : renderList(comments, commentsList);
  });

  select.addEventListener('change', () => {
    const index = select.selectedIndex;
    const currentValue = select.options[index].value;

    if (currentValue) {
      searchBar.value = null;

      currentComments = comments.filter((post) => {
        if (post.email === currentValue) {
          return post;
        }
      });
    }

    renderList(currentComments, commentsList);
  });
};

export default filterComments;
