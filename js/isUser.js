const isUser = () => {
    return JSON.parse(localStorage.getItem('User')) || '';
};

export default isUser;

/* 
Описываем общий процесс запуска скриптов 
с авторизацией эта функция будет использоваться для всех страниц

export const runWidthAuthorization = (runner) => {
  Проверяем наличие авторизации в локал сторедже
  const isAuthorized = ...

  if (isAuthorize) {
    runner();
  } else {
    redirectToAuthorization();
  }
}

*/
