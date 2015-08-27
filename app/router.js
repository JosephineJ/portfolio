import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro', {path: '/intro'});
  this.route('about');
  this.resource('projects', {path: '/projects'}, function(){
      this.route('overview',{path: '/'});  
      this.resource('project', {path: '/:project_id'});
  });
  this.route('imprint');
});


export default Router;
