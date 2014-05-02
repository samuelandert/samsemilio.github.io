App = Ember.Application.create();

App.Router.map(function () {
	this.resource('overview');
	this.resource('connections');
});
