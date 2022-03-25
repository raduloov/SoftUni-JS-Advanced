import { html } from '../../node_modules/lit-html/lit-html.js';

const notificationTemplate = message => html`
  <div id="errorBox" class="notification">
    <span>${message}</span>
  </div>
`;

export const notificationView = () => {
  return notificationTemplate();
};
