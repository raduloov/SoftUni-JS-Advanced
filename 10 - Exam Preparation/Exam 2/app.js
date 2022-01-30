window.addEventListener('load', solve);

function solve() {
  const genreInput = document.getElementById('genre');
  const nameInput = document.getElementById('name');
  const authorInput = document.getElementById('author');
  const dateInput = document.getElementById('date');
  const addBtn = document.getElementById('add-btn');
  const allHitsEl = document.querySelector('.all-hits-container');
  const savedEl = document.querySelector('.saved-container');
  const totalLikesEl = document.querySelector('.likes p');

  let totalLikes = 0;

  addBtn.addEventListener('click', event => {
    event.preventDefault();

    if (
      genreInput.value === '' ||
      nameInput.value === '' ||
      authorInput.value === '' ||
      dateInput.value === ''
    ) {
      return;
    }

    const markup = `
    <div class="hits-info">
      <img src="./static/img/img.png">
      <h2>Genre: ${genreInput.value}</h2>
      <h2>Name: ${nameInput.value}</h2>
      <h2>Author: ${authorInput.value}</h2>
      <h3>Date: ${dateInput.value}</h3>
      <button class="save-btn">Save song</button>
      <button class="like-btn">Like song</button>
      <button class="delete-btn">Delete</button>
    </div>
    `;

    allHitsEl.innerHTML += markup;

    genreInput.value = '';
    nameInput.value = '';
    authorInput.value = '';
    dateInput.value = '';

    Array.from(allHitsEl.querySelectorAll('.save-btn')).forEach(btn => {
      btn.addEventListener('click', event => {
        const songMarkup = `
        <div class="hits-info">
          <img src="./static/img/img.png">
          <h2>${event.target.parentElement.querySelectorAll('h2')[0].innerText}</h2>
          <h2>${event.target.parentElement.querySelectorAll('h2')[1].innerText}</h2>
          <h2>${event.target.parentElement.querySelectorAll('h2')[2].innerText}</h2>
          <h3>${event.target.parentElement.querySelector('h3').innerText}</h3>
          <button class="delete-btn">Delete</button>
        </div>
        `;

        savedEl.innerHTML += songMarkup;
        event.target.parentElement.remove();

        Array.from(savedEl.querySelectorAll('.delete-btn')).forEach(btn => {
          btn.addEventListener('click', event => {
            event.target.parentElement.remove();
          });
        });
      });
    });
    Array.from(allHitsEl.querySelectorAll('.like-btn')).forEach(btn => {
      btn.addEventListener('click', event => {
        totalLikesEl.innerText = `Total Likes: ${++totalLikes}`;
        event.target.disabled = true;
      });
    });
    Array.from(allHitsEl.querySelectorAll('.delete-btn')).forEach(btn => {
      btn.addEventListener('click', event => {
        event.target.parentElement.remove();
      });
    });
  });
}
