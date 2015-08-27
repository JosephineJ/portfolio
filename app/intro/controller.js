import Ember from 'ember';

export default Ember.Controller.extend({
	topHidden: false,
	applicationController: Ember.inject.controller('application')
});
