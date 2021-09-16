import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ExamEditorComponent extends Component {
  examTypes = ['vedic-maths', 'maths', 'abacus'];

  model() {}

  @action
  saveExam() {
    this.args.exam.save();
    this.args?.oncreate?.();
  }
}
