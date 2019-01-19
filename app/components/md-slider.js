import Component from '@ember/component';

export default Component.extend({
  classNames: ['slider','md-slider'],
  init(){
    this._super(...arguments);
  },
  didInsertElement(){
    this.$().slider({indicators: false, transition: 300, interval: 2000});
  },
  click(){
    this.$().slider('pause');
    this.$().slider('next');
  },
  doubleClick(){
    this.$().slider('start');
  }
});

