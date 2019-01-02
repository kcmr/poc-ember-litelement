import Component from '@ember/component';

export default Component.extend({
  listeners: null,

  child: null,

  didInsertElement() {
    this._super(...arguments);

    this._setChild();
    this._setListeners();
    this._bindListeners();
  },

  willDestroyElement() {
    this._super(...arguments);

    this._unbindListeners();
  },

  _setChild() {
    const child = this.element.querySelector('*');
    this.set('child', child);
  },

  _setListeners() {
    const listeners = Object.entries(this.attrs)
      .filter(([key]) => key.startsWith('on-'))
      .map(([key, value]) => [key.replace('on-', ''), value]);

    this.set('listeners', listeners);
  },

  _bindListeners() {
    const listeners = this.listeners;
    const child = this.child;

    if (listeners.length && child) {
      listeners.forEach((listener) => {
        const [eventName, handler] = listener;
        child.addEventListener(eventName, handler.value.bind(this));
      });
    }
  },

  _unbindListeners() {
    const listeners = this.listeners;
    const child = this.child;

    if (listeners.length && child) {
      listeners.forEach((listener) => {
        const [eventName] = listener;
        child.removeEventListener(eventName);
      });
    }
  }
});
