import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	lastName: 		DS.attr('string'),
	email: 			DS.attr('string'),
	password: 		DS.attr('string'),
	isAdmin:  		DS.attr('boolean'),

	loans: 			DS.hasMany('loan')
});
