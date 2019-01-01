import Controller from '@ember/controller';
import '@kuscamara/sample-lit-element'

export default Controller.extend({
  vip: true,
  name: 'Firstname Lastname',
  email: 'sample@email.com',
  avatar: 'https://api.adorable.io/avatars/120/random-0.png',
  phone: '666 666 666',
  phoneVisibilityDuration: 1000,
  cats: [
    'Miau',
    'Meow',
    'Meee'
  ]
});
