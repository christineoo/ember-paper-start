import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    transitionTo: function(param){
      this.transitionTo(param);
    },
    willTransition: function(){
      this.controller.set('drawerOpen', false);
    }
  }
});

