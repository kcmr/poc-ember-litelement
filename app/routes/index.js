import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'Pepe' },
      { name: 'Pepa' },
      { name: 'Fufu' },
      { name: 'Lola' },
    ];
  },

  setupController(controller, model) {
    controller.set('cats', model);
  }
});
