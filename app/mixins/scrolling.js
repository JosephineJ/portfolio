import Ember from 'ember';

export default Ember.Mixin.create({
	  bindScrolling: function() {
    var onScroll;
    var _this = this;

    var scrollFunc = function(){ 
		return _this.scrolled();
    };

    onScroll = function(){
		Ember.run.throttle(this, scrollFunc, 70);
	};

    $(document).bind('touchmove', onScroll);
    $(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    $(window).unbind('scroll');
    $(document).unbind('touchmove');
  }


});
