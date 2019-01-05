import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  computedCats: computed('model.@each.name', function() {
    const cats = this.get('model');
    return cats.map(item => item.name);
  }),

  actions: {
    parentAction(parentParam) {
      console.log(`parentParam ${parentParam}`);
    }
  }
});
