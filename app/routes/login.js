import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		this.store.findAll('user');
	},
	actions: {
		register(name, lastName, email, password, isAdmin) {
			this.store.createRecord('user', {
				name,
				lastName,
				email,
				password
			}).save().then(() => {
				this.set('controller.newName', null);
				this.set('controller.newLastName', null);
				this.set('controller.newPass', null);
				this.set('controller.newEmail', null);
			})
		},
		login(email, password) {
			let user = this.store.peekAll('user')
				.filterBy('email', email);
			if (user.objectAt(0).data.password === password) {
				this.set('controller.session.currentUser', {
					name: user.objectAt(0).data.name,
					lastName: user.objectAt(0).data.lastName,
					email: user.objectAt(0).data.email,
					isAdmin: user.objectAt(0).data.isAdmin
				});
				this.set('controller.email', null);
				this.set('controller.password', null);
				this.transitionTo('search');
			}
			else {
				alert('ÑO!');
				return;
			}
		}
	}
});
	