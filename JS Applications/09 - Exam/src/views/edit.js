import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../services/pets.js';
import { petIsNotValid } from '../utils/utils.js';

const editTemplate = ({ image, name, breed, age, weight }, submitHandler) => html`
  <section id="editPage">
    <form class="editForm" @submit=${submitHandler}>
      <img src="./images/editpage-dog.jpg" />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" value=${name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" value=${breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" value="${age} years" />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" value=${weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" value=${image} />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;

export const editView = ctx => {
  const { petId } = ctx.params;

  const submitHandler = e => {
    e.preventDefault();

    const petData = Object.fromEntries(new FormData(e.currentTarget));

    if (petIsNotValid(petData)) {
      alert('All fields are required!');
      return;
    }

    petsService
      .edit(petId, petData)
      .then(() => {
        ctx.page.redirect(`/dashboard/${petId}`);
      })
      .catch(error => {
        alert(error);
      });
  };

  petsService.getPet(petId).then(pet => {
    ctx.render(editTemplate(pet, submitHandler));
  });
};
