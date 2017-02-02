import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const { Service, set } = Ember;

const AuthStub = Service.extend({
  authenticated: false
});

moduleForComponent('3-login-form', 'Integration | Component | 3 login form', {
  integration: true,
  beforeEach() {
    this.register('service:auth', AuthStub);
    this.inject.service('auth', { as: 'authService'});
  }
});

test('Displays form when not authenticated', function(assert) {
  let authService = this.get('authService');
  set(authService, 'authenticated', false);

  this.render(hbs`
    {{3-login-form}}
  `);

  assert.ok(this.$('.test-login-form-form').length, 'Login form is present');
});
