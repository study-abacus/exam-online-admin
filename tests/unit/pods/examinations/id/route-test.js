import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | examinations/id', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:examinations/id');
    assert.ok(route);
  });
});
