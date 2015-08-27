import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',
	classNames: ['row','single-project'],
	classNameBindings: ['isClosed:closed:opened'],
	isClosed: true,
	didInsertElement: function(){
		this.$('.main-nav a:contains("Projects")').addClass('active');
	},
	actions:{
		openSlides(){
			this.set('isClosed',false);
			this.$('.shade').removeClass('semi-hidden');
		},
		closeSlides(){
			this.toggleProperty('isClosed');
		}
	}
});
