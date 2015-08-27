import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['isOnTop:topslide'],
	isOnTop: false,
	didInsertElement: function(){

	}
});
