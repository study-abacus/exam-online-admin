import Route from '@ember/routing/route';

export default class ExaminationsIdRoute extends Route {
  model(params) {
    return this.store.findRecord('examination', params.id);
  }
}
