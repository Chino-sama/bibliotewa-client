import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	model() {
		return this.store.findRecord('user', this.get('session.currentUser.id'));
	},
	setupController(controller, model) {
		this._super(...arguments);

		controller.set('newName', model.get('name'));
		controller.set('newLastName', model.get('lastName'));
	},
	actions: {
		save (name, lastName, email) {
			let user = this.get('controller.model');
			user.set('name', name);
			user.set('lastName', lastName);
			user.save().then(() => {
				localStorage.setItem('user', JSON.stringify({
					id: JSON.parse(JSON.stringify(user.get('id'))),
					name: name,
					lastName: lastName,
					email: email,
					isAdmin: JSON.parse(JSON.stringify(user.get('isAdmin')))
				}));
				this.set('session.currentUser', JSON.parse(localStorage.getItem('user')));
				swal(
				  'Se han guardado tus cambios',
				  '',
				  'success'
				)
			});
		}
	}
});	