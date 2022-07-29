import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './index.scss';

@customElement('ilb-modal')
export class IlbModal extends LitElement {
  @property()
  title: string = '';

  static get styles(): any {
    return [styles];
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="modal">
        ${this.title !== '' ? html`<div class="modal--header">${this.title}</div>`: null}
        <div class="modal--content">
          <slot></slot>
        </div>
        <div class="modal--actions">
          <ilb-button/>Dissmiss</ilb-button>
        </div>
      </div>
    `;
  }
}