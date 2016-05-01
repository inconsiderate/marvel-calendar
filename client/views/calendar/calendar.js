
Template.calendarpage.onRendered(function() {
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com',
		height: 600,
	});
});

Template.calendarpage.helpers({
	currentCalendarMovies: function() {
		return Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()},
  		}, {sort: { releaseDate: 1 }});
	},

	comingSoonCalendarMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
  	},
  	unconfirmedCalendarMovies: function() {
  		return Movies.find({releaseDate: null});
  	}
})

