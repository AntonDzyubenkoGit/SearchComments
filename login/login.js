import { users } from './users.js';

const authForm = document.getElementById('authForm');
const login = document.getElementById('login');
const password = document.getElementById('password');

const isValid = (login, password) => {
  return login.length > 4 && password.length > 4;
};

authForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userLogin = login.value.trim();
  const userPassword = password.value.trim();

  if (!isValid(userLogin, userPassword)) {
    return;
  } else {
    users.map((user) => {
      if (user.login === userLogin && user.password === userPassword) {
        localStorage.setItem('User', JSON.stringify(user.login));
        login.value = null;
        password.value = null;
        // window.location.href = '/';
        window.location.href = '/SearchComments';
      }
    });
  }
});
