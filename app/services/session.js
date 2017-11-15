import Ember from 'ember';

export default Ember.Service.extend({
	currentUser: JSON.parse(localStorage.getItem('user')),
});
