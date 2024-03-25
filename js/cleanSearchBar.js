const cleanSearchBar = (cleanBtn, commentsList, comments, renderList, searchBar) => {
  cleanBtn.addEventListener('click', () => {
    searchBar.value = null;
    renderList(comments, commentsList);
  });
};

export default cleanSearchBar;
