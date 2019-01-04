import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['field'],

  type: 'text',

  _isStacked: computed('type', function() {
    return this.type !== 'checkbox';
  })
});
