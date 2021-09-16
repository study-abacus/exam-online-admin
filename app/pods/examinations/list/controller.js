import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ExaminationsIndexController extends Controller {
  queryParams = ['abc'];
  abc = '';

  @tracked examlist = [];

  @action
  toggleListedExam(exam) {
    exam.unlisted = !exam.unlisted;
    exam.save();
  }
}
