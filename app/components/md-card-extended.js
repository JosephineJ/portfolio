import MdCard from 'ember-cli-materialize/components/md-card';
//import layout from '/templates/components/md-card';

export default MdCard.extend({
  classNames: ['md-card-extended'],
  mouseEnter(e){
    e.target.click();
  },
  mouseLeave(e){
    Ember.$(e.target).find('.activator').click();
  }
});
