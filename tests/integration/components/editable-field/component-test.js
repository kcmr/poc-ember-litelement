import { module } from 'qunit';
import test from 'ember-sinon-qunit/test-support/test';
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
    assert.equal(button.textContent, "Any");
  });

  test('Setting buttonTabindex sets the button tabindex', async function(assert) {
    await render(hbs`{{editable-field}}`);
    assert.notOk(find('button').hasAttribute('tabindex'), 'button does not have tabindex by default');

    await render(hbs`{{editable-field buttonTabindex="-1"}}`);
    assert.ok(find('button').getAttribute('tabindex'), '-1');
  });

  test('Setting buttonType sets the button type', async function(assert) {
    await render(hbs`{{editable-field}}`);
    assert.equal(find('button').getAttribute('type'), 'button', 'default button type is "button"');

    await render(hbs`{{editable-field buttonType="submit"}}`);
    assert.equal(find('button').getAttribute('type'), 'submit');
  });

  // What??
  // Cómo se skipea un test?
  // test('Setting "focusInput" to true focuses the input', async function(assert) {
  //   await render(hbs`{{editable-field}}`);
  //   const input = find('input');
  //   const focusSpy = this.spy(input, 'focus');
  //   this.set('focusInput', true);
  //   console.log('focusSpy', focusSpy);
  //   assert.ok(focusSpy.calledOnce);
  // });

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
