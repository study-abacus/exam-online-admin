import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') phone;
  @attr('boolean') verified;
  @belongsTo('profile') profile;
  @belongsTo('user-local') userLocal;
  @hasMany('exam-attempt') examAttempts;
}
