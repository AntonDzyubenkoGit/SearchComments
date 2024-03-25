const getComments = async (data = []) => {
  await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => data.push(...json.slice(0, 15)));

  return data;
};

export default getComments;
