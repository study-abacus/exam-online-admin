import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExaminationsRoute extends Route {
  @service store;

  queryParams = {
    abc: {
      refreshModel: true,
    },
  };

  model(params) {
    console.log('here = ', params);
    const q = params?.abc || '';
    return this.store.query('examination', {
      filter: {
        title: {
          $iLike: `%${q}%`,
        },
      },
    });
  }

  setupController(controller) {
    controller.set('examlist', this.model());
  }
}
