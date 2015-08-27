import Ember from 'ember';
import ScrollingMixin from "../../mixins/scrolling";

export default Ember.Component.extend(ScrollingMixin, {
	needs: 'application',
	tagName: 'header',
	classNames: ['main-nav','col-md-2'],
	isStrolling: false,
	didInsertElement: function() {
        this.bindScrolling();
    },
    willRemoveElement: function() {
        this.unbindScrolling();
    },
    scrolled: function() {
		var extraSpace = 80;
		$('.main-footer').addClass('fade-out');
		var divBottom = parseInt($('#main-content').height()) /2;
		var screenTop = $(window).scrollTop() + extraSpace;
		if (screenTop >= divBottom){
					if (!$('.main-footer').hasClass('solid-line')){
						$('.main-footer').addClass('solid-line').removeClass("fade-out");
					}
		}
		else if (screenTop < divBottom){
				$(".main-footer").removeClass("solid-line").addClass('fade-out');
				if(screenTop < extraSpace + 100){
						$('.main-footer').removeClass('fade-out');
				}		
				else{
						$('.main-footer').addClass('fade-out');
				}
		}
    }
});
