import DS from 'ember-data';

export default DS.Model.extend({
	name: 		DS.attr('string'),
	lastName: 	DS.attr('string'),

	fullName: Ember.computed('name', 'lastName', function() {
		return `${this.get('name')} ${this.get('lastName')}`;
	}),


	books: 		DS.hasMany('books')
});