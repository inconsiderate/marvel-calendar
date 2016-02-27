
Template.layout.onRendered(function() {
	this.subscribe('movies');
	this.subscribe('posts');
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com',
		height: 390,
	});        
});

Template.layout.helpers({
	blogPosts: function() {
		return Posts.find({});
	},
	unconfirmedMovies: function() {
		return Movies.find({
			releaseDate: null,
  		}, {sort: { releaseDate: 1 }});
	},
});

Template.movieList.helpers({
	currentMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		}, {sort: { releaseDate: 1 }});
	},

	upcomingMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
	},

	previousMovies: function() {
		return Movies.find({
			releaseDate: {$lt: new Date()},
			airing: false
  		}, {sort: { releaseDate: 1 }});
	}
})