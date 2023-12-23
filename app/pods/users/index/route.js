import Route from '@ember/routing/route';

export default class UsersIndexRoute extends Route {
  model(params) {
    return this.store.query('user', {});
  }
}
