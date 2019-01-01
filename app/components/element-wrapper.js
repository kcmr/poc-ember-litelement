import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const child = this.element.querySelector('*');

    const listeners = Object.entries(this.attrs)
      .filter(([key, value]) => key.startsWith('on-'))
      .map(([key, value]) => [key.replace('on-', ''), value]);

    (listeners || []).forEach((listener) => {
      const [eventName, handler] = listener;

      child.addEventListener(eventName, handler.value.bind(this));
    });
  }
});
