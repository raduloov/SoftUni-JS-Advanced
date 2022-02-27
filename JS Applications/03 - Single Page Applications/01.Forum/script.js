const titleInput = document.getElementById('topicName');
const usernameInput = document.getElementById('username');
const postInput = document.getElementById('postText');
const postBtn = document.querySelector('.public');
const cancelBtn = document.querySelector('.cancel');
const topicContainer = document.querySelector('.topic-container');
const mainContainer = document.querySelector('.container');

const getData = async type => {
  const res = await fetch(
    `http://localhost:3030/jsonstore/collections/myboard/${type}`
  );
  const data = await res.json();
  return data;
};

const sendData = async (type, data) => {
  await fetch(`http://localhost:3030/jsonstore/collections/myboard/${type}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const setData = async (type, topic) => {
  const data = await getData('posts');

  if (type === 'posts') {
    topicContainer.innerHTML = Object.values(data)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(
        post => `
        <div class="topic-container">
          <div class="topic-name-wrapper">
            <div class="topic-name">
              <a href="#" class="normal" id=${post._id}>
                <h2>${post.title}</h2>
              </a>
              <div class="columns">
                <div>
                  <p>Date: <time>${post.date}</time></p>
                  <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
      )
      .join('\n');
  }

  if (type === 'comments') {
    mainContainer.innerHTML = `
    ${topic}

    <div class="theme-content">
      <!-- theme-title  -->
      <div class="theme-title">
          <div class="theme-name-wrapper">
              <div class="theme-name">
                  <h2>${topic.title}</h2>

              </div>

          </div>
      </div>
      <!-- comment  -->

      <div class="comment">

      </div>

      <div class="answer-comment">
          <p><span>currentUser</span> comment:</p>
          <div class="answer">
              <form>
                  <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                  <div>
                      <label for="username">Username <span class="red">*</span></label>
                      <input type="text" name="username" id="username">
                  </div>
                  <button>Post</button>
              </form>
          </div>
      </div>

    </div>
  `;
    const res = await getData('comments');
    console.log(res);
  }

  document.querySelectorAll('.topic-container a').forEach(btn => {
    btn.addEventListener('click', event => {
      const topicId = event.target.parentElement.id;
      showTopic(topicId);
    });
  });
};

const showTopic = async topicId => {
  const topic = Object.values(await getData('posts')).find(
    topic => topic._id === topicId
  );
  setData('comments', topic);

  const commentInput = document.getElementById('comment');
  const commentUsernameInput = document.getElementById('username');
  const postCommentBtn = document.querySelector('button');

  postCommentBtn.addEventListener('click', async event => {
    event.preventDefault();

    if (
      commentInput.value.trim().length === 0 ||
      commentUsernameInput.value.trim().length === 0
    ) {
      return;
    }

    const data = {
      comment: commentInput.value,
      username: commentUsernameInput.value,
      date: new Date(),
      topicId,
    };

    sendData('comments', data);
    console.log(data);
  });
};

setData('posts');

postBtn.addEventListener('click', event => {
  event.preventDefault();

  if (
    titleInput.value.trim().length === 0 ||
    usernameInput.value.trim().length === 0 ||
    postInput.value.trim().length === 0
  ) {
    return;
  }

  const data = {
    title: titleInput.value,
    username: usernameInput.value,
    post: postInput.value,
    date: new Date().toISOString(),
  };

  sendData('posts', data);
  setData('posts');

  titleInput.value = '';
  usernameInput.value = '';
  postInput.value = '';
});

cancelBtn.addEventListener('click', event => {
  event.preventDefault();

  titleInput.value = '';
  usernameInput.value = '';
  postInput.value = '';
});
