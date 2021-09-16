import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default class ExaminationModel extends Model {
  @attr() title;
  @attr() code;
  @attr() description;
  @attr() type;
  @attr() primaryPrice;
  @attr() secondaryPrice;
  @attr('date') start;
  @attr('date') registrationEnd;
  @attr('boolean') unlisted;
  @hasMany('question') questions;
  @hasMany('practice-paper') practicePapers;
  @belongsTo('exam-attempt') examAttempt;

  @computed('primaryPrice')
  get primaryPriceDisplay() {
    return this.primaryPrice / 100;
  }
}
