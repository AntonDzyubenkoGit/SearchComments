export const users = [
  { id: 'User1', login: 'Vasya', password: '123456' },
  { id: 'User2', login: 'Petya', password: '123457' },
  { id: 'User3', login: 'Anton', password: '123458' },
];

/* Ниже находится блок кода для создания новых пользователей */
/*

const userLogin = login.value.trim();
const userPassword = password.value.trim();
const userId = createId(users);

const user = new User(userId, userLogin, userPassword);
users.push(user);

function createId(users) {
  return users.length + 1;
}

function User(id, login, password) {
  this.id = id;
  this.login = login;
  this.password = password;

  return { id: 'User' + this.id, login: this.login, password: this.password };
}
*/
