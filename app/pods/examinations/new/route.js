import Route from '@ember/routing/route';

export default class ExaminationsNewRoute extends Route {
  model() {
    return this.store.createRecord('examination', {});
  }
}
