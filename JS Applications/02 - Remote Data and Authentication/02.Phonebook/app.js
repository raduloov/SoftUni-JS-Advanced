async function attachEvents() {
  const phonebookEl = document.getElementById('phonebook');
  const loadBtn = document.getElementById('btnLoad');
  const personInput = document.getElementById('person');
  const phoneInput = document.getElementById('phone');
  const createBtn = document.getElementById('btnCreate');

  loadBtn.addEventListener('click', async () => {
    try {
      const res = await fetch('http://localhost:3030/jsonstore/phonebook/');
      const data = await res.json();
      console.log(data);

      phonebookEl.innerHTML = Object.values(data)
        .map(
          entry =>
            `<li id="${entry._id}">${entry.person}: ${entry.phone}<button>Delete</button></li>`
        )
        .join('\n');
    } catch (error) {
      console.log(error);
    }

    phonebookEl.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', async event => {
        const id = event.target.parentElement.id;

        await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
          method: 'DELETE',
        });
      });
    });
  });

  createBtn.addEventListener('click', async event => {
    if (
      personInput.value.trim().length === 0 ||
      phoneInput.value.trim().length === 0
    ) {
      return;
    }

    await fetch('http://localhost:3030/jsonstore/phonebook/', {
      method: 'POST',
      body: JSON.stringify({ person: personInput.value, phone: phoneInput.value }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
}

attachEvents();
