import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			authors: this.store.findAll('author'),
			editorials: this.store.findAll('editorial'),
			genres: this.store.findAll('genre')
		});
	}
});
