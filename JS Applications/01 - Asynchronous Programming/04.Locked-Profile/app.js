async function lockedProfile() {
  const mainEl = document.getElementById('main');

  const getData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3030/jsonstore/advanced/profiles'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await getData();
  console.log(data);
  mainEl.innerHTML = Object.values(data)
    .map(
      id => `
      <div class="profile">
			<img src="./iconProfile2.png" class="userIcon" />
			<label>Lock</label>
			<input type="radio" name="user1Locked" value="lock" checked>
			<label>Unlock</label>
			<input type="radio" name="user1Locked" value="unlock"><br>
			<hr>
			<label>Username</label>
			<input type="text" name="user1Username" value="${id.username}" disabled readonly />
			<div class="hiddenInfo">
      <hr>
      <label>Email:</label>
      <input type="email" name="user1Email" value="${id.email}" disabled readonly />
      <label>Age:</label>
      <input type="email" name="user1Age" value="${id.age}" disabled readonly />
			</div>
      
      <button>Show more</button>
      </div>
      `
    )
    .join('\n');

  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', event => {
      const isLocked =
        event.target.parentElement.querySelector('input[value=lock]').checked;
      const info = event.target.parentElement.querySelector('div');

      if (event.target.innerText === 'Show more' && !isLocked) {
        info.classList.remove('hiddenInfo');
        event.target.innerText = 'Hide it';
      } else if (event.target.innerText === 'Hide it' && !isLocked) {
        info.classList.add('hiddenInfo');
        event.target.innerText = 'Show more';
      }
    });
  });
}
