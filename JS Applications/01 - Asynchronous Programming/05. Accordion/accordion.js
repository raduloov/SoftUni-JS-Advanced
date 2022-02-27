const mainContainer = document.getElementById('main');

const getData = async id => {
  try {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/${
        id ? `details/${id}` : 'list'
      }`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showMore = async id => {
  const content = (await getData(id)).content;
  return content;
};

const setData = async () => {
  const data = await getData();

  mainContainer.innerHTML = data
    .map(
      el => `
    <div class="accordion">
      <div class="head">
        <span>${el.title}</span>
        <button class="button" id="${el._id}">
          More
        </button>
      </div>
      <div class="extra">
        <p></p>
      </div>
    </div>
  `
    )
    .join('\n');

  data.forEach(async el => {
    const content = (await getData(el._id)).content;

    document
      .getElementById(el._id)
      .parentElement.nextElementSibling.querySelector('p').innerText = content;
  });

  document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', event => {
      if (event.target.innerText === 'MORE') {
        event.target.innerText = 'LESS';

        event.target.parentElement.nextElementSibling.style.display = 'block';
      } else {
        event.target.innerText = 'MORE';

        event.target.parentElement.nextElementSibling.style.display = 'none';
      }
    });
  });
};

setData();
