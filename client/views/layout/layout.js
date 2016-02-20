
Template.layout.onRendered(function() {
	this.subscribe('movies');
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com'
	});

});

Template.layout.helpers({
	currentMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		});
	},

	upcomingMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
		});
}

})