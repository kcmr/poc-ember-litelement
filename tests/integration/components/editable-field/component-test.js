import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | editable-field', function(hooks) {
  setupRenderingTest(hooks);

  test('Setting value sets the input value', async function(assert) {
    await render(hbs`{{editable-field value="Any"}}`);
    const input = find('input');
    assert.equal(input.value, "Any");
  });

  test('Setting placeholder sets the input placeholder', async function(assert) {
    await render(hbs`{{editable-field placeholder="Any"}}`);
    const input = find('input');
    assert.equal(input.placeholder, "Any");
  });

  test('Setting buttonLabel sets the button text', async function(assert) {
    await render(hbs`{{editable-field buttonLabel="Any"}}`);
    const button = find('button');
    assert.equal(button.textContent.trim(), "Any");
  });

  test('Button is disabled when the input is empty', async function(assert) {
    await render(hbs`{{editable-field}}`);
    assert.ok(find('button').disabled, 'Button is disabled');

    await render(hbs`{{editable-field value="Any"}}`);
    assert.notOk(find('button').disabled, 'Button is not disabled');
  });

  test('Clicking button triggers "onButtonClick"', async function(assert) {
    await render(hbs`{{editable-field value="Any" onButtonClick=(action (mut called) true)}}`);
    const button = find('button');
    button.click();
    assert.ok(this.get('called'), 'Sets called to true');
  });
});
