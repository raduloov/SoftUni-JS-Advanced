async function solution() {
  const getData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3030/jsonstore/advanced/articles/list '
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await getData();
  console.log(data);
}
