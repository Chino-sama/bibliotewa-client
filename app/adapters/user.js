import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	queryRecord(modelName, query) {
    	return Ember.$.getJSON("/api/users");
  	}
});
