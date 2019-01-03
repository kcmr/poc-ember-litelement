import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function codeProperty([value]/*, hash*/) {
  return htmlSafe(value ? `<code>{{${value}}}</code>` : '');
}

export default helper(codeProperty);
