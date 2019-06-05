import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      name: {
        type: String
      }
    }
  }

  static get styles() {
    return css`
      :host {
        color: red;
      }

      .button {
        background-color: #fff;
      }
    `;
  }

  render() {
    return html`
      <p>Hola ${this.name}</p>
      <paper-button class="button" raised>${this.name}</paper-button>
      <sample-element></sample-element>
    `;
  }
}

customElements.define('my-element', MyElement);
