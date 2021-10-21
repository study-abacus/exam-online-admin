import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class LayoutService extends Service {
  @service session;
  @service router;

  @computed('router.currentRoute.name', 'session.isAuthenticated')
  get currentLayoutComponentName() {
    if (this.session.isAuthenticated) {
      if (!this.router.currentRoute) {
        return 'layouts/base';
      }

      switch (this.router.currentRoute.name) {
        case 'login':
          return 'layouts/base';
        default:
          return 'layouts/with-navbar';
      }
    }

    return 'layouts/base';
  }
}
