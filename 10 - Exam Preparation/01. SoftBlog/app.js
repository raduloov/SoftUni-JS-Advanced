function solve() {
  const creator = document.getElementById('creator');
  const title = document.getElementById('title');
  const category = document.getElementById('category');
  const content = document.getElementById('content');
  const createBtn = document.querySelector('.create');
  const postsContainer = document.querySelector('.site-content main section');
  const archiveContainer = document.querySelector('.archive-section ol');

  const archives = [];

  createBtn.addEventListener('click', event => {
    event.preventDefault();

    const postMarkup = `<article><h1>${title.value}</h1><p>Category: <strong>${category.value}</strong></p><p>Creator: <strong>${creator.value}</strong></p><p>${content.value}</p><div class="buttons"><button class="btn delete">Delete</button><button class="btn archive">Archive</button></div></article>`;

    postsContainer.innerHTML += postMarkup;
    creator.value = '';
    title.value = '';
    category.value = '';
    content.value = '';

    Array.from(postsContainer.querySelectorAll('.archive')).forEach(btn =>
      btn.addEventListener('click', event => {
        archives.push(
          event.target.parentElement.parentElement.querySelector('h1').innerText
        );

        archiveContainer.innerHTML = archives
          .sort((a, b) => a.localeCompare(b))
          .map(el => `<li>${el}</li>`)
          .join('');

        event.target.parentElement.parentElement.remove();
      })
    );

    Array.from(postsContainer.querySelectorAll('.delete')).forEach(btn =>
      btn.addEventListener('click', event => {
        event.target.parentElement.parentElement.remove();
      })
    );
  });
}
