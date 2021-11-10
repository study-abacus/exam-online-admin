import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class ExamEditorComponent extends Component {
  @computed()
  get tabs() {
    return [
      {
        name: 'Editor',
        component: 'exam-editor/main-editor',
      },
      {
        name: 'Questions',
        component: 'exam-editor/questions-editor',
      },
    ];
  }
}
