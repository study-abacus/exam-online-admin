import EmberRouter from '@ember/routing/router';
import config from 'exam-online-admin/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('examinations', function () {
    this.route('id', { path: '/:id' });
    this.route('new');
    this.route('list');
  });
  this.route('users');
  this.route('exam-attempts');
  this.route('question');
});
