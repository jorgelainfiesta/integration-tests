import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('1-greeting', 'Integration | Component | 1 greeting', {
  integration: true
});

test('Basic test', function(assert) {
  this.set('name', 'John');
  this.render(hbs`{{1-greeting name=name}}`);

  let componentText = this.$().text().trim();
  assert.equal(componentText, 'Hi John!', 'Name is rendered');

  assert.ok(this.$('> div').hasClass('greeting-message'), 'Class is applied');
});

test('Two parameters', function(assert) {
  this.set('name', 'Joseph');
  this.set('salutation', 'Welcome');
  this.render(hbs`{{1-greeting name=name salutation=salutation}}`);

  let componentText = this.$().text().trim();
  assert.equal(componentText, 'Welcome Joseph!', 'Name is rendered');

  assert.ok(this.$('> div').hasClass('greeting-message'), 'Class is applied');
});
