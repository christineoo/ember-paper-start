import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    submit: function(param){
      if (param) {
        alert("Thank you! <3");
      }
      else {
        alert("Come back later! <3");
      }
    } 
  }
})
