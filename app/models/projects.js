import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  technologies: DS.attr('string')
});
