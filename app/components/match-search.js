import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['match-search'],
	searchPlaceholder: 'Escribe para buscar...',
	noMatchesMessage: 'Sin resultados :(',
	searchEnabled: true,
	allowClear: true,
	options: [],

	returnPropertyName: null,
	displayPropertyName: 'name',

	didInsertElement () {
		this.$('input.validation-input').focus(() => {
			this.$('.ember-power-select-trigger').focus();
		});
	},

	actions: {
		select (opt) {
			let returnPropertyName = this.get('returnPropertyName');
			let selection = returnPropertyName ? Ember.get(opt, returnPropertyName) : opt;
			let index = this.get('options').indexOf(selection);
			this.set('selection', selection);
			this.set('selectedIndex', index);
		}
	}
});
