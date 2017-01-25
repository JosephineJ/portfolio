import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['filter-tag'],
  classNameBindings: ['isActive:active'],
  currentlyActiveFilter: null,
  isActive: Ember.computed('currentlyActiveFilter', function(){
    let currentActive = this.get('currentlyActiveFilter');
    return this === currentActive;
  }),
  click(){
    this.sendAction('action', this);
  }
});
