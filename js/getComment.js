/* 
  Тут непонятно зачем нужен первый параметр 
  это получается у нас будет файл api.service.js
  Нужно разделить функции для запроса сприска комментариев и комментария по айдишнику потомучто у них разная структура ответа

  Давай попробуем описать ApiService классом 

  class ApiService {
    #baseApi // адрес api

    constructor(baseApi) {
      this.baseApi = baseApi;
    }

    getComment = (id) => {
      return fetch(`${this.baseApi}comments/${id}`) ...
    }

    getComments = () => {
      return fetch(`${this.baseApi}comments/`) ...
    }
  }

  const apiService = new ApiService(`https://jsonplaceholder.typicode.com/`); // паттерн этого класса синглтон

  export { apiService }
*/

const getComment = async (data = {}, id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then((response) => response.json())
        .then((json) => {
            for (let item in json) {
                data[item] = json[item];
            }
        });

    return data;
};

export default getComment;
