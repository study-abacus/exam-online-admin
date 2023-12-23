import Component from '@glimmer/component';
import { dropTask } from 'ember-concurrency-decorators';
import { all } from 'rsvp';

export default class ExamEditorQuestionsEditorMainEditorComponent extends Component {
  questionTypes = ['text', 'mcq'];

  get extendedEditorComponent() {
    switch (this.args.question.type) {
      case 'mcq':
        return 'exam-editor/questions-editor/mcq-question-editor';
      default:
        return 'exam-editor/questions-editor/text-question-editor';
    }
  }

  @dropTask
  *saveQuestion() {
    yield this.args.question.save();

    if (this.args.question.type == 'mcq') {
      yield all(this.args.question.choices.map((choice) => choice.save()));
    }
  }

  @dropTask
  *deleteQuestion() {
    yield this.args.question.destroyRecord();
  }
}
