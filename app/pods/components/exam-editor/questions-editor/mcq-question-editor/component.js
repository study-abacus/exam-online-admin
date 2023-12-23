import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ExamEditorQuestionsEditorMcqQuestionEditorComponent extends Component {
  @service store;

  @action
  addChoice() {
    this.store.createRecord('choice', {
      question: this.args.question,
      title: '',
    });
  }

  @action
  removeChoice(choice) {
    choice.destroyRecord();
  }
}
