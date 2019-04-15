import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import '@kuscamara/sample-lit-element'

export default Controller.extend({
  vip: true,

  name: 'Firstname Lastname',

  email: 'sample@email.com',

  phone: '666 666 666',

  phoneVisibilityDuration: 1000,

  catNames: computed('cats.@each.name', function() {
    return this.get('cats').mapBy('name');
  }),

  avatarSrc: 'https://api.adorable.io/avatars/',

  avatarImage: 'random-3.png',

  avatarSize: 100,

  avatar: computed('avatarSrc', 'avatarSize', 'avatarImage', {
    get(key) {
      return `${this.avatarSrc}${this.avatarSize}/${this.avatarImage}`;
    },
    set(key, value) {
      const [size, image] = value.split(this.avatarSrc)[1].split('/');
      this.set('avatarImage', image);
      this.set('avatarSize', size);
      return value;
    }
  }),

  toast: service(),

  actions: {
    showToast(event) {
      const { type, detail } = event;
      const toast = this.get('toast');
      const options = {
        positionClass: 'toast-bottom-right',
        progressBar: false,
        closeButton: false
      };

      this.set('avatarSize', 150);

      toast.info(`Detail: ${detail}`, `Event: ${type}`, options);
    }
  }
});
