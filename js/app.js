App = Ember.Application.create();

App.Router.map(function () {
	this.resource('overview');
	this.resource('persons', function() {
		this.resource('person' , { path: ':person_id' });
	});
});

App.PersonsRoute = Ember.Route.extend({
	model: function() {
		return persons;
	}
});

var persons = [
	{
		name: 'Pavel Elf',
		link: 'http://elf-pavlik.wwelves.org/',
	},
	{
		name: 'Auli Haldjas',
		link: 'http://auli.haldjas.org/',
	},
	{
		name: 'Daniel Harris',
		link: 'http://profile.daha.co.uk',
	},
	{
		name: 'Álvaro Saco',
		link: 'http://alvarosaco.github.io',
	},
	{
		name: 'Jon Richter',
		link: 'http://y.chn.io/',
	},
	{
		name: 'Marcus Sabadello',
		link: 'http://box.projectdanube.org/',
	},
];
