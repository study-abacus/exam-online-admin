import Component from '@glimmer/component';
import { dropTask } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

export default class ExamEditorQuestionsEditorComponent extends Component {
  @service store;

  @dropTask
  *addQuestion() {
    this.store.createRecord('question', {
      examination: this.args.exam,
      title: '',
      description: '',
      type: 'text'
    })
  }
}
