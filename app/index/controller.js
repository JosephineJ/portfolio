import Ember from 'ember';

export default Ember.Controller.extend({
	topHidden: true,
	applicationController: Ember.inject.controller('application')
});
