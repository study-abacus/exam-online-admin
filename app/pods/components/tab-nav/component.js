import Component from '@glimmer/component';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TabNavComponent extends Component {
  @tracked currentActive = null;

  constructor() {
    super(...arguments);
    // first tab is active, if no activeTab is provided
    // if (!this.activeTab) {
    later(() => {
      // this.onTabChange(this.tabs.firstObject);
      this.currentActive = this.tabs.firstObject;
    });
    // }
  }

  // @action
  // onclick() {

  // }
}
