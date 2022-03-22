import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll, getMemebers } from '../api/teams.js';

const browseTemplate = teams => html`
  <section id="browse">
    <article class="pad-med">
      <h1>Team Browser</h1>
    </article>

    ${teams.map(preiewTemplate)}
  </section>
`;

const preiewTemplate = team => html`
  <article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col" />
    <div class="tm-preview">
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <span class="details"> Members</span>
      <div><a href="/browse/${team._id}" class="action">See details</a></div>
    </div>
  </article>
`;

export async function browsePage(ctx) {
  ctx.render(html`<p>Loading...</p>`);

  const teams = await getAll();
  const members = await getMemebers();

  ctx.render(browseTemplate(teams));
}
