import Component from '@ember/component';

export default Component.extend({
  listeners: null,

  child: null,

  didInsertElement() {
    this._super(...arguments);

    const child = this.element.querySelector('*');
    const listeners = Object.entries(this.attrs)
      .filter(([key]) => key.startsWith('on-'))
      .map(([key, value]) => [key.replace('on-', ''), value]);

    this.set('listeners', listeners);
    this.set('child', child);

    if (listeners.length && child) {
      listeners.forEach((listener) => {
        const [eventName, handler] = listener;
        child.addEventListener(eventName, handler.value.bind(this));
      });
    }
  },

  willDestroyElement() {
    this._super(...arguments);

    const listeners = this.get('listeners');
    const child = this.get('child');

    if (listeners.length && child) {
      listeners.forEach((listener) => {
        const [eventName] = listener;
        child.removeEventListener(eventName);
      });
    }
  }
});
