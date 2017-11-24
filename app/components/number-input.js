import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	p: null,
	didInsertElement () {
		this.set('p', this.get('value'));
	},
	pChanged: Ember.observer('p', function () {
		let {p, min, max} = this.getProperties('p', 'min', 'max');
		let n = Number(p);
		if (!n) return;
		Ember.run.later(() => {
			if (typeof p === 'string') return this.set('p', n);
			if (n < min) this.set('p', min);
			if (n > max) this.set('p', max);
			this.set('value', this.get('p'))
		});
	}),
	actions: {
		onFocusOut () {
			let n = Number(this.get('p'));
			if (!n) this.set('p', this.get('min'));
		}
	}
});
