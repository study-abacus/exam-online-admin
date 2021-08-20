import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ExaminationsNewController extends Controller {
  @action
  oncreate() {
    this.transitionToRoute('examinations');
  }
}
