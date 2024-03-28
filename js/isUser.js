const isUser = () => {
  return JSON.parse(localStorage.getItem('User')) || '';
};

export default isUser;
