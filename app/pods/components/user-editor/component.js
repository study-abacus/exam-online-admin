import Component from '@glimmer/component';
import { dropTask } from 'ember-concurrency-decorators';

export default class ExamEditorMainEditorComponent extends Component {
  @dropTask
  *saveUser() {
    debugger;
    yield this.args.user.save();
    (yield this.args.user.userLocal)?.save();
  }
}
