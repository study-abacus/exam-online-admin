import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exam-attempts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:exam-attempts');
    assert.ok(route);
  });
});
