import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ExamEditorMainEditorComponent extends Component {
  examTypes = ['vedic-maths', 'maths', 'abacus'];

  @action
  saveExam() {
    this.args.exam.save();
    this.args?.oncreate?.();
  }
}
