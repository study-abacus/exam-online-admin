import Component from '@glimmer/component';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TabNavComponent extends Component {
  @tracked currentActive = null;

  constructor() {
    super(...arguments);
    later(() => {
      this.currentActive = this.args.tabs.firstObject;
    });
  }

  @action
  onTabChange(tab) {
    this.currentActive = tab;
  }
}
