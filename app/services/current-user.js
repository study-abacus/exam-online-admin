import Service, { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service store;

  user = null;

  async load() {
    const user = await this.store.queryRecord('user', {
      custom: {
        ext: 'url',
        url: 'me',
      },
    });

    this.set('user', user);

    return user;
  }
}
