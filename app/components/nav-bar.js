import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	router: Ember.inject.service('-routing'),
	actions: {
		signOut () {
			localStorage.setItem('user', null);
			this.set('session.currentUser', null);
			this.get('router').transitionTo('home');
			window.location.reload(true);
		}
	}	
});
