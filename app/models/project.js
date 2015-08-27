import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  employer: DS.attr('string'),
  description: DS.attr('string'),
  technologies: DS.attr('string'),
  screenshots: DS.hasMany('screenshot',{async: true}) 
});
