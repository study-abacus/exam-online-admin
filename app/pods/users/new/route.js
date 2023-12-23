import Route from '@ember/routing/route';

export default class UsersNewRoute extends Route {
  async model(params) {
    const user = this.store.createRecord('user');
    const userLocal =
      (await user.userLocal) ||
      this.store.createRecord('userLocal', {
        user,
      });
    user.userLocal = userLocal;
    userLocal.user = user;
    return user;
  }
}
