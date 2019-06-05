import { LitElement, html, css } from 'lit-element';

class MySubElement extends LitElement {
  static get properties() {
    return {
      text: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        color: green;
      }
    `;
  }

  render() {
    return html`
      <p>Hola desde sub-element</p>
      <p>${this.text}</p>
      <sample-element text=${this.text}></sample-element>
    `;
  }
}

customElements.define('my-sub-element', MySubElement);
