import DS from 'ember-data';

export default DS.Model.extend({
	title: 			DS.attr('string'),
	description: 	DS.attr('string'),
	edition: 		DS.attr('string'),
	year: 			DS.attr('number'),
	isbn: 			DS.attr('number'),
	cover: 			DS.attr('string'),
	copies: 		DS.attr('number'),
	status: 		DS.attr('string'),

	author: 		DS.belongsTo('author'),
	editorial: 		DS.belongsTo('editorial'),
	genres: 		DS.hasMany('genres')
});
