import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './index.scss';

@customElement('ilb-toaster')
export class IlbToaster extends LitElement {

  @property()
  text: String = '';

  @property()
  timer: number = 3000;

  @property()
  showToast: boolean = false;

  static get styles(): any {
    return [styles];
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('showToast')) {
      this.toasterTimer();
    }
  }

  toasterTimer() {
    
    setTimeout(() => { this.showToast = false }, this.timer);
  }

  // Render the UI as a function of component state
  render() {
    return this.showToast ? html`
      <div class="toaster">
        ${this.text}
      </div>
    `: '';
  }
}