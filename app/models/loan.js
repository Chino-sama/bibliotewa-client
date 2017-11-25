import DS from 'ember-data';

export default DS.Model.extend({
	loanDate: 		DS.attr('string'),
	returnDate: 	DS.attr('string'),

	user: 			DS.belongsTo('user'),
	books: 			DS.hasMany('book')
});
