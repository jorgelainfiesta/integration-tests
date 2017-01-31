import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['secret-message'],
  classNameBindings: ['authorized', 'open', 'wrongPassword'],

  authorized: computed.and('_authorized'),
  open: computed.and('_open', 'authorized'),

  actions: {
    toggle() {
      let authorized = this.get('authorized');
      let passwordRequired = this.get('passwordRequired');

      if (authorized) {
        this.toggleProperty('_open');
      } else if(passwordRequired) {
        this.toggleProperty('requestPassword');
      } else {
        this.sendAction('onAuthorize');
        this._authOpen(true);
      }
    },

    requestAuth(password) {
      let authorized = this.get('onAuthorize')(password);
      this._authOpen(authorized);
    },

    inputPassword(password) {
      this.set('password', password);
      this.set('wrongPassword', false);
    }
  },

  _authOpen(authorized) {
    this.setProperties({
      _authorized: authorized,
      _open: authorized,
      wrongPassword: !authorized,
      requestPassword: !authorized
    });
  }
});
