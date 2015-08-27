import DS from 'ember-data';

export default DS.Model.extend({
	imgloc: DS.attr('string'),
	desc: DS.attr('string'),
	project: DS.belongsTo('project')
});
