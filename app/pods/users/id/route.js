import Route from '@ember/routing/route';

export default class UsersIdRoute extends Route {
  async model(params) {
    const user = await this.store.findRecord('user', params.id);
    const userLocal =
      (await user.userLocal) ||
      this.store.createRecord('userLocal', {
        user,
      });
    user.userLocal = userLocal;
    return user;
  }
}
