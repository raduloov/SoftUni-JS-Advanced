async function attachEvents() {
  const msgEl = document.getElementById('messages');
  const author = document.querySelectorAll('input')[0];
  const content = document.querySelectorAll('input')[1];
  const submitBtn = document.getElementById('submit');
  const refreshBtn = document.getElementById('refresh');

  submitBtn.addEventListener('click', async () => {
    if (author.value.trim().length === 0 || content.value.trim().length === 0) {
      return;
    }

    const data = { author: author.value, content: content.value };
    await fetch('http://localhost:3030/jsonstore/messenger', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    author.value = '';
    content.value = '';
  });

  refreshBtn.addEventListener('click', async () => {
    try {
      const res = await fetch('http://localhost:3030/jsonstore/messenger');
      const data = await res.json();

      msgEl.value = Object.values(data)
        .map(msg => `${msg.author}: ${msg.content}`)
        .join('\n');
    } catch (error) {
      console.log(error);
    }
  });
}

attachEvents();
