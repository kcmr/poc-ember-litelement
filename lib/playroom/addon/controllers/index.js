import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import '../lit-elements/my-element';
import '../lit-elements/my-sub-element/my-sub-element';

export default Controller.extend({
  toast: service(),

  actions: {
    showToast() {
      const toast = this.get('toast');
      const options = {
        positionClass: 'toast-bottom-right',
        progressBar: false,
        closeButton: false
      };

      toast.info('Hola mundo', 'Toast title', options);
    }
  }
});
