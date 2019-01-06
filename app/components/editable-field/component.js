import Component from '@ember/component';
import { observer } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Component.extend({
  classNames: ['field', 'editable-field'],

  buttonLabel: '',

  placeholder: '',

  value: '',

  buttonTabindex: null,

  buttonType: 'button',

  focusInput: false,

  _focusInputChanged: observer('focusInput', function() {
    if (this.focusInput) {
      this.element.querySelector('input').focus();
    }
  }),

  onButtonClick() {},

  _isDisabled: empty('value'),

  actions: {
    _onButtonClick() {
      this.onButtonClick();
    },

    _onInputBlur() {
      this.set('focusInput', false);
    }
  }
});
