import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function codeProperty(params/*, hash*/) {
  return htmlSafe(`<code>{{${params}}}</code>`);
}

export default helper(codeProperty);
