import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../services/pets.js';
import * as donationService from '../services/donation.js';

const detailsTemplate = (
  pet,
  isOwner,
  deleteHandler,
  user,
  hasDonated,
  donations,
  donationHandler
) => html`
  <section id="detailsPage">
        <div class="details">
          <div class="animalPic">
            <img src=${pet.image} />
          </div>
          <div>
            <div class="animalInfo">
              <h1>Name: ${pet.name}</h1>
              <h3>Breed: ${pet.breed}</h3>
              <h4>Age: ${pet.age} years</h4>
              <h4>Weight: ${pet.weight}</h4>
              <h4 class="donation">Donation: ${donations * 100}$</h4>
            </div>
            <div class="actionBtn">
              ${
                user && isOwner
                  ? html`
                      <a href="/dashboard/${pet._id}/edit" class="edit">Edit</a>
                      <a
                        href="javascript:void(0)"
                        class="remove"
                        @click=${deleteHandler}
                        >Delete</a
                      >
                    `
                  : nothing
              }
              ${
                user && !isOwner && !hasDonated
                  ? html`<a href="/donate" class="donate">Donate</a>`
                  : nothing
              }
              
            </div>
          </div>
        </div>
      </section>
  </section>
`;

export const detailsView = async ctx => {
  const { petId } = ctx.params;

  const pet = await petsService.getPet(petId);
  const donations = await donationService.getDonations(petId);

  console.log(donations);

  let hasDonated;
  if (ctx.user) {
    hasDonated = await donationService.hasDonated(petId, ctx.user._id);
  }

  let isOwner;
  if (ctx.user) {
    isOwner = pet._ownerId === ctx.user._id;
  }

  const donationHandler = async e => {
    e.preventDefault();

    await donationService.donate(petId);

    ctx.page.redirect(`/dashboard/${petId}`);
  };

  const deleteHandler = async () => {
    const confirmed = confirm(`Are you sure you want to delete ${pet.title}?`);

    if (confirmed) {
      await petsService.del(petId);
      ctx.page.redirect('/dashboard');
    }
  };

  ctx.render(
    detailsTemplate(
      pet,
      isOwner,
      deleteHandler,
      ctx.user,
      hasDonated,
      donations,
      donationHandler
    )
  );
};
