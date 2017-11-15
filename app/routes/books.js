import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return Ember.RSVP.hash({
			books: this.store.findAll('book'),
			genres: this.store.findAll('genre')
		}); 
	},
	actions: {
		createBook(name, genres) {
			this.store.createRecord('book', {
				name,
				genres
			}).save().then(() => {
				this.set('controller.newName', null);
			});
		}
	}
});
