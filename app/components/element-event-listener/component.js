import Component from '@ember/component';

export default Component.extend({
  listeners: null,

  child: null,

  didInsertElement() {
    this._super(...arguments);

    this._setChild();
    this._setListeners();
    this._setEventHandlers('add');
  },

  willDestroyElement() {
    this._super(...arguments);

    this._setEventHandlers('remove');
  },

  _setChild() {
    this.set('child', this.element.querySelector('*'));
  },

  _setListeners() {
    const listeners = Object.entries(this.attrs)
      .filter(([key]) => key.startsWith('on-'))
      .map(([key, value]) => [key.replace('on-', ''), value]);

    this.set('listeners', listeners);
  },

  _setEventHandlers(method = 'add') {
    const listeners = this.listeners;
    const child = this.child;

    if (listeners.length && child) {
      listeners.forEach((listener) => {
        const [eventName, handler] = listener;
        child[`${method}EventListener`](eventName, handler);
      });
    }
  }
});
