const loadBtn = document.getElementById('loadBooks');
const tBody = document.querySelector('tbody');
const submitBtn = document.querySelector('form button');
const titleInput = document.querySelectorAll('form input')[0];
const authorInput = document.querySelectorAll('form input')[1];

const getData = async () => {
  const res = await fetch('http://localhost:3030/jsonstore/collections/books');
  const data = await res.json();
  console.log(data);
  return data;
};

const sendData = async () => {
  if (
    titleInput.value.trim().length === 0 ||
    authorInput.value.trim().length === 0
  ) {
    return;
  }

  const data = {
    author: authorInput.value,
    title: titleInput.value,
  };

  await fetch('http://localhost:3030/jsonstore/collections/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const updateData = async (bookId, data) => {
  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const deleteData = async bookId => {
  await fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
    method: 'DELETE',
  });
};

const setData = async () => {
  const data = await getData();

  tBody.innerHTML = Object.values(data)
    .map(
      book => `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td id="${book._id}">
          <button>Edit</button>
          <button>Delete</button>
      </td>
    </tr>
  `
    )
    .join('\n');

  document.querySelectorAll('tbody button').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();

      const bookId = event.target.parentElement.id;

      if (event.target.innerText === 'Edit') {
        document.querySelector('form').innerHTML = `
        <h3>Edit FORM</h3>
          <label>TITLE</label>
          <input type="text" name="title" value="${
            event.target.parentElement.parentElement.querySelectorAll('td')[0]
              .innerText
          }">
          <label>AUTHOR</label>
          <input type="text" name="author" value="${
            event.target.parentElement.parentElement.querySelectorAll('td')[1]
              .innerText
          }">
        <button>Save</button>
        `;

        document.querySelector('form button').addEventListener('click', event => {
          event.preventDefault();

          const data = {
            title: document.querySelectorAll('input')[0].value,
            author: document.querySelectorAll('input')[1].value,
            _id: bookId,
          };

          updateData(bookId, data);
          setData();

          document.querySelector('form').innerHTML = `
          <h3>FORM</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title..." />
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author..." />
          <button>Submit</button>
          `;
        });
      } else {
        deleteData(bookId);
        setData();
      }
    });
  });
};

loadBtn.addEventListener('click', async event => {
  event.preventDefault();

  setData();
});

submitBtn.addEventListener('click', async event => {
  event.preventDefault();

  sendData();
  setData();
});

setData();
