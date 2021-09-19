import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ExaminationsIndexController extends Controller {
  queryParams = ['q'];
  q = '';

  @action
  toggleListedExam(exam) {
    exam.unlisted = !exam.unlisted;
    exam.save();
  }
}
