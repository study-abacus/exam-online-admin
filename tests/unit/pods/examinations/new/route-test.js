import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | examinations/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:examinations/new');
    assert.ok(route);
  });
});
