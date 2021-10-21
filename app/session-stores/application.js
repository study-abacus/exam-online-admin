import LocalStorage from 'ember-simple-auth/session-stores/local-storage';

export default LocalStorage.extend({
  key: 'ember_simple_auth_admin-session',
});
