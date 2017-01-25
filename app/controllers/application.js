import Ember from 'ember';

export default Ember.Controller.extend({
  colorMap: {
    'index': '',
    'linkedin': 'pink-bg',
    'projects': 'gray-bg',
    'talks': 'white-bg'
  },
  notIndexRoute: Ember.computed('currentRouteName', function(){
    let currentRoute =  this.get('currentRouteName');
    return currentRoute !== 'index';
  }),
  isLinkedin: Ember.computed.equal('currentRouteName', 'linkedin'),
  isProjects: Ember.computed.equal('currentRouteName', 'projects'),
  pageColor: Ember.computed('currentRouteName', function(){
    return this.get('colorMap')[this.get('currentRouteName')];
  })
});
