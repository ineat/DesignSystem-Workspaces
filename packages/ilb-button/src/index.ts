import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './index.scss';

@customElement('ilb-button')
export class IlbButton extends LitElement {

  static get styles(): any {
    return [styles];
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <button class="btn">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%"/>
        </svg>
        <slot></slot>
      </button>
    `;
  }
}