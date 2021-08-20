import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // @service session;

  host = 'http://localhost:6969';
  namespace = 'api/admin';

  get headers() {
    return {
      // Authorization: `JWT ${this.session.authToken}`,
      'content-type': 'application/json',
    };
  }
}

// router, templates, controllers and components - pods
