import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function codeProperty(params/*, hash*/) {
  const [name] = params;
  return htmlSafe(name ? `<code>{{${name}}}</code>` : '');
}

export default helper(codeProperty);
