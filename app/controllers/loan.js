import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		registerLoan (book, user) {
			this.store.createRecord('loan', {
				book,
				user
			}).save().then((loan) => {
				Ember.$('#loan').modal('close');
				this.setProperties({
					newLoanBook: null,
					newLoanUser:null
				});
				this.transitionToRoute('admin.loans');
			});
		}
	}
});
