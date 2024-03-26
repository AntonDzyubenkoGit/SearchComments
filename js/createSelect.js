const createOptions = (select, optionsList) => {
  const currentOptions = [...new Set(optionsList)];
  select.innerHTML = null;

  currentOptions.forEach((item, id) => {
    const option = document.createElement('option');
    option.value = id;
    option.text = item.text;

    select.append(option);
  });
};

const createSelect = (searchBar, cleanBarBtn) => {
  const mailSelect = document.querySelector('#select');
  const emailList = document.querySelectorAll('#email');

  createOptions(mailSelect, emailList);

  searchBar.addEventListener('input', () => {
    const currentEmailList = document.querySelectorAll('#email');
    createOptions(mailSelect, currentEmailList);
  });

  cleanBarBtn.addEventListener('click', () => {
    const currentEmailList = document.querySelectorAll('#email');
    createOptions(mailSelect, currentEmailList);
  });
};

export { createOptions, createSelect };
