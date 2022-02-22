async function attachEvents() {
  const loadBtn = document.getElementById('btnLoadPosts');
  const postsEl = document.getElementById('posts');
  const viewBtn = document.getElementById('btnViewPost');
  const postTitleEl = document.getElementById('post-title');
  const postBodyEl = document.getElementById('post-body');
  const postCommentsEl = document.getElementById('post-comments');

  const getData = async type => {
    try {
      const response = await fetch(`http://localhost:3030/jsonstore/blog/${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  loadBtn.addEventListener('click', async () => {
    const postsData = await getData('posts');
    console.log(postsData);

    Object.values(postsData).forEach(post => {
      const option = document.createElement('option');
      option.value = post.id;
      option.innerHTML = post.title.toUpperCase();
      postsEl.appendChild(option);
    });
  });

  viewBtn.addEventListener('click', async () => {
    const postId = postsEl.value;
    const postData = Object.values(await getData('posts')).find(
      post => post.id === postId
    );
    const commentsData = Object.values(await getData('comments')).filter(
      comment => comment.postId === postId
    );
    const title = postsEl.querySelector(`option[value=${postId}]`).innerText;

    postTitleEl.innerText = title;
    postBodyEl.innerText = postData.body;
    postCommentsEl.innerHTML = commentsData
      .map(comment => `<li id="${comment.id}">${comment.text}</li>`)
      .join('\n');
  });
}

attachEvents();
