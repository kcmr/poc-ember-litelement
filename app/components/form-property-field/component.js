import Component from '@ember/component';
import { computed } from '@ember/object';
import template from './template';

export default Component.extend({
  layout: template,

  classNames: ['field'],

  type: 'text',

  _isStacked: computed('type', function() {
    return this.type !== 'checkbox';
  })
});
