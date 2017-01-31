import Ember from 'ember';
const { isPresent } = Ember;

export default Ember.Controller.extend({
  actions: {
    authorizeOpen(authorize) {
      return isPresent(authorize);
    }
  }
});
