import $ from 'jquery';
import MdCard from 'ember-cli-materialize/components/md-card';
//import layout from '/templates/components/md-card';

export default MdCard.extend({
  classNames: ['md-card-extended'],
  mouseEnter(e){
    e.target.click();
  },
  mouseLeave(e){
    if (this.get('holdVeil') === undefined){
      $(e.target).find('.activator').click();
    }
    return false;
  }
});
