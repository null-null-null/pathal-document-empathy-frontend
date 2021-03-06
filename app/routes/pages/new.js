import Ember from 'ember';

const Route = Ember.Route;

export default Route.extend({

  model() {
    return this.store.createRecord('page');
  },

  deactivate() {
    this.get('controller.model').rollback();
  }
});
