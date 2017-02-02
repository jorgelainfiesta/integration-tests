import Ember from 'ember';
const { isPresent } = Ember;

export default Ember.Service.extend({
  authenticated: false,
  login(username, password) {
    let correct = username === password && isPresent(username);
    this.set('authenticated', correct);
    if (correct) {
      this.set('username', username);
    }
    return correct;
  },

  logout() {
    this.setProperties({
      authenticated: false,
      username: ''
    });
  }
});
