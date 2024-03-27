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
