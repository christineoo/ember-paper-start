import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions:{
    addButton: function(){
      alert("Add button clicked~");
    } 
  }
});

