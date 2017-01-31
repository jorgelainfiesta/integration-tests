import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('2-secret-message', 'Integration | Component | 2 secret message', {
  integration: true
});

test('Toggle when no password is required', function(assert) {
  this.render(hbs`
    {{#2-secret-message title="Card title"}}
      Secret message here
    {{/2-secret-message}}
  `);

  this.$('.test-secret-message-toggle').click();
  let secretMessage = this.$('.test-secret-message-message').text().trim();
  assert.equal(secretMessage, 'Secret message here');
});

test('Send authorize action', function(assert) {
  assert.expect(1);
  this.set('testAuthorize', () => {
    assert.ok(true, 'onAuthorize action is sent');
  });
  this.render(hbs`
    {{#2-secret-message title="Card title" onAuthorize=testAuthorize}}
      Secret message here
    {{/2-secret-message}}
  `);
  this.$('.test-secret-message-toggle').click();
});
