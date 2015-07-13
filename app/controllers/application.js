import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  
  isHomeActive: function() {
    if (this.get('controllers.application.currentPath') === 'home'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),

  isProjectsActive: function() {
    if (this.get('controllers.application.currentPath') === 'projects'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),

  isSignUpActive: function() {
    if (this.get('controllers.application.currentPath') === 'sign-up'){
      return 'active';
    }
  }.property('controllers.application.currentPath'),
});
