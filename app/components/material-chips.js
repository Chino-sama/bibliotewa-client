import Ember from 'ember';

export default Ember.Component.extend({
	
	didInsertElement() {
		this.$('.chips').material_chip();
		this.$('.chips-autocomplete').material_chip({
			autocompleteOptions: {
				data: {
					'Apple': null,
					'Microsoft': null,
					'Google': null
				},
				limit: Infinity,
				minLength: 1
			}
		});
	}	
});
