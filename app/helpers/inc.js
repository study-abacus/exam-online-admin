import { helper } from '@ember/component/helper';

export default helper(function inc(args) {
  let [n] = args;

  return n + 1;
});
