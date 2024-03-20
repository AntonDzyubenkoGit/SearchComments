const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => json.slice(0, 15));

  return response;
};

export default getComments;
