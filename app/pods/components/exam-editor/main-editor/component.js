import Component from '@glimmer/component';
import { dropTask } from 'ember-concurrency-decorators';

export default class ExamEditorMainEditorComponent extends Component {
  examTypes = ['vedic-maths', 'english', 'abacus'];

  @dropTask
  *saveExam() {
    yield this.args.exam.save();
    this.args?.oncreate?.();
  }
}
