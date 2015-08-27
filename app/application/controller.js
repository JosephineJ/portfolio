import Ember from 'ember';

export default Ember.Controller.extend({
	topHidden: true,
	isScrolling:  false,
	topNotHidden: Ember.computed.not('topHidden')
});
