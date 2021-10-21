import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { dropTask } from 'ember-concurrency-decorators';

export default class LoginController extends Controller {
  @service session;
  @service currentUser;

  username = '';
  password = '';

  @dropTask
  *login() {
    yield this.session.authenticate('authenticator:jwt', {
      username: this.username,
      password: this.password,
    });
    yield this.currentUser.load();
    this.transitionToRoute('index');
  }
}
