import Ember from 'ember';

var projectRoute = Ember.Route.extend({
		model: function(params){
		return this.store.find('project', params.project_id);
	}
});

export default projectRoute;
