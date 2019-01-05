import Component from '@ember/component';
import { empty } from '@ember/object/computed';

export default Component.extend({
  tagName: '',

  buttonLabel: '',

  placeholder: '',

  value: '',

  _isDisabled: empty('value'),

  actions: {
    _onButtonClick() {
      this.onButtonClick();
    }
  }
});
