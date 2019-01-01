import Controller from '@ember/controller';
import { computed } from '@ember/object';
import '@kuscamara/sample-lit-element'

export default Controller.extend({
  vip: true,

  name: 'Firstname Lastname',

  email: 'sample@email.com',

  phone: '666 666 666',

  phoneVisibilityDuration: 1000,

  cats: [
    'Miau',
    'Meow',
    'Meee'
  ],

  avatarSrc: 'https://api.adorable.io/avatars/',

  avatarSize: 100,

  avatar: computed('avatarSrc', 'avatarSize', function() {
    return `${this.avatarSrc}${this.avatarSize}/random-0.png`;
  })
});
