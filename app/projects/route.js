import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('project');
	}/*,
	renderTemplate: function(controller, model) {
		this.render('../overview');
	}*/
});
