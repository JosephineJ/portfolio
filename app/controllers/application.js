import Ember from 'ember';

export default Ember.Controller.extend({
  notIndexRoute: Ember.computed('currentRouteName', function(){
    let currentRoute =  this.get('currentRouteName');
    return currentRoute !== 'index';
  })
});
