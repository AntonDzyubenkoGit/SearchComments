const filterComments = (searchBar, commentsList, comments, renderList) => {
  searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.trim();
    let filterComments;

    if (searchValue) {
      filterComments = comments.filter((post) => {
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

    searchValue ? renderList(filterComments, commentsList) : renderList(comments, commentsList);
  });
};

export default filterComments;
