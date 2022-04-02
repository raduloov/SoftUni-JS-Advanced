import { html } from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../services/pets.js';

const petTemplate = ({ image, name, breed, _id }) => html`
  <div class="animals-board">
    <article class="service-img">
      <img class="animal-image-cover" src=${image} />
    </article>
    <h2 class="name">${name}</h2>
    <h3 class="breed">${breed}</h3>
    <div class="action">
      <a class="btn" href="/dashboard/${_id}">Details</a>
    </div>
  </div>
`;

const dashboardTemplate = pets => html`
  <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
      ${pets.length > 0
        ? pets.map(pet => petTemplate(pet))
        : html`<p class="no-pets">No pets in dashboard</p>`}
      <div></div>
    </div>
  </section>
`;

export const dashboardView = ctx => {
  petsService.getAll().then(pets => {
    ctx.render(dashboardTemplate(pets));
  });
};
