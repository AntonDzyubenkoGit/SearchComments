const filterComments = (searchBar, commentsList, comments, renderList) => {
  searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.trim();
    let currentComments;

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
};

export default filterComments;
