import Component from '@ember/component';

export default Component.extend({
  classNames: ['editable-list'],
  items: null,
  listButtonLabel: '',
  listButtonTabindex: -1,
  addButtonLabel: '',
  addInputPlaceholder: '',
  textProperty: '',
  removeIconSize: 18,
  _focusInput: false,
  actions: {
    removeItem(index) {
      const items = this.get('items');
      items.removeAt(index);
    },

    addItem(item) {
      const items = this.get('items');
      items.pushObject({ name: item });

      this.set('item', '');
      this.set('_focusInput', true);
    }
  }
});
