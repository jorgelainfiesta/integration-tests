import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  auth: service(),

  actions: {

    submitLogin(username, password) {
      let authService = this.get('auth');
      let authenticated = authService.login(username, password);
      if (authenticated) {
        this.setProperties({
          username: '',
          password: ''
        });
      } else {
        this.setProperties({
          wrongPassword: true,
          password: ''
        });
      }
      this.sendAction('loggedIn', authenticated);
      return false;
    },

    updateInput(input, value) {
      this.set(input, value);
      this.set('wrongPassword', false);
    },

    logout() {
      let authService = this.get('auth');
      authService.logout();
    }
  }
});
