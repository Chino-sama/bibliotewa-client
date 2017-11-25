import Ember from 'ember';

export default Ember.Component.extend({	
	data: null,
	opts: {},
	init() {
		var wa = {}
		this._super(...arguments);
		this.get('data').forEach((data) => {
			wa[data.data.name] = null;
		});
		this.set('opts', wa)
	},
	didInsertElement() {
		this.$('.chips').material_chip();
		this.$('.chips-autocomplete').material_chip({
			autocompleteOptions: {
				data: this.get('opts'),
				limit: Infinity,
				minLength: 1
			}
		});
	}	
});
