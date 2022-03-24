import { html } from '../../node_modules/lit-html/lit-html.js';

import * as carService from '../services/carService.js';
import { listingIsNotValid } from '../utils/validators.js';

const createTemplate = submitHandler => html`
  <section id="create-listing">
    <div class="container">
      <form id="create-form" @submit=${submitHandler} method="POST">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" />

        <hr />
        <input type="submit" class="registerbtn" value="Create Listing" />
      </form>
    </div>
  </section>
`;

export const createView = ctx => {
  const submitHandler = e => {
    e.preventDefault();

    const carData = Object.fromEntries(new FormData(e.currentTarget));

    if (listingIsNotValid(carData)) {
      alert('No empty fields!');
      return;
    }

    carService
      .create(carData)
      .then(() => {
        ctx.page.redirect('/listings');
      })
      .catch(error => alert(error));
  };

  ctx.render(createTemplate(submitHandler));
};
