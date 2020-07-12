import { LitElement, html } from 'lit-element';

function camelCase(string, wordSeparators = []) {
  const separators = Array.isArray(wordSeparators) ? wordSeparators : [wordSeparators];
  const regexp = new RegExp(`[${separators.join('')}].`, 'g');

  return string.replace(regexp, (match) => match.charAt(1).toUpperCase());
}

function dashToCamel(string) {
  return camelCase(string, '-');
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function runCallback(type, event) {
  const methodName = `on${capitalize(dashToCamel(type))}`;

  if (typeof this[methodName] === 'function') {
    this[methodName](event);
  }
}

class InAppComponent extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      someProp: { type: Object }
    };
  }

  constructor() {
    super();

    this.onNameChanged = () => {};
    this.fireEventWithCallback = (type, params) => {
      const event = new CustomEvent(type, params);
      this.dispatchEvent(event);
      runCallback.call(this, type, event);
    }
  }

  updated(changedProps) {
    if (changedProps.has('name') && changedProps.get('name') !== undefined) {
      this._onNameChanged();

      // double curly bindings in Ember sets properties (not attributes) so references are keept (no serialization)
      console.log('someProp', this.someProp);
    }
  }

  _onNameChanged() {
    this.fireEventWithCallback('name-changed', {
      composed: true,
      detail: this.name
    });
  }

  _onButtonClick() {
    this.name += '-a';
  }

  render() {
    return html`
      <p>Hola ${this.name}</p>
      <button @click="${this._onButtonClick}">Change name</button>
    `;
  }
}

customElements.define('in-app-component', InAppComponent);
