const loadBtn = document.getElementById('loadBooks');

const getData = async () => {
  const res = await fetch('http://localhost:3030/jsonstore/collections/books');
  const data = await res.json();
  console.log(data);
};

loadBtn.addEventListener('click', () => {
  getData();
});
