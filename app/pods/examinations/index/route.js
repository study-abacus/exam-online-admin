import Route from '@ember/routing/route';

export default class ExaminationsRoute extends Route {
  queryParams = {
    q: {
      refreshModel: true,
    },
  };

  model(params) {
    const { q = '' } = params;
    return this.store.query('examination', {
      filter: {
        title: {
          $iLike: `%${q}%`,
        },
      },
    });
  }
}
