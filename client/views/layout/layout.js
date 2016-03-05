
Template.layout.onRendered(function() {
	this.subscribe('movies');
	this.subscribe('posts');
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com',
		height: 390,
	});        
});

Template.homePage.helpers({
	blogPosts: function() {
		return Posts.find({
		}, {sort: { createdAt: -1 }});
	},
	unconfirmedMovies: function() {
		return Movies.find({
			releaseDate: null,
  		}, {sort: { releaseDate: 1 }});
	},
});
