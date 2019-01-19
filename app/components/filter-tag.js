import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: ['filter-tag'],
  classNameBindings: ['isActive:active'],
  currentlyActiveFilter: null,
  isActive: computed('currentlyActiveFilter', function(){
    let currentActive = this.get('currentlyActiveFilter');
    return this === this.get('currentlyActiveFilter');
  }),
  click(){
    this.sendAction('action', this);
  }
});
