import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'exam-online-admin/config/environment';
import { inject as service } from '@ember/service';

const AuthAdapter = JSONAPIAdapter.extend(DataAdapterMixin);

export default class ApplicationAdapter extends AuthAdapter {
  @service session;

  host = ENV.apiHost;
  namespace = 'api/admin';

  get headers() {
    if (this.session.isAuthenticated) {
      const { jwt } = this.get('session.data.authenticated');
      return {
        Authorization: `JWT ${jwt}`,
        'content-type': 'application/json',
      };
    }

    return {};
  }

  urlForQueryRecord(query) {
    if (query.custom) {
      switch (query.custom.ext) {
        case 'url': {
          let url = query.custom.url;
          delete query.custom;
          return `${super.urlForQueryRecord(...arguments)}/${url}`;
        }
      }
    } else {
      return super.urlForQueryRecord(...arguments);
    }
  }

  urlForQuery(query) {
    if (query.custom) {
      switch (query.custom.ext) {
        case 'url': {
          let url = query.custom.url;
          delete query.custom;
          return `${super.urlForQuery(...arguments)}/${url}`;
        }
      }
    } else {
      return super.urlForQuery(...arguments);
    }
  }
}
