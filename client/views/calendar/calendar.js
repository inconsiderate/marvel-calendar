
Template.calendarpage.onRendered(function() {
	$('#marvel-calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com',
		height: 600
	});
	$('#dc-calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'vvh2id74hkqre54iib2hcuskgs@group.calendar.google.com',
		height: 600
	});

    $('.ui.dimmer').dimmer({
        on: 'hover'
    });

    changeMenuTabs('#nav-cal');

});

Template.calendarpage.helpers({
	nextUpCalendarMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()}
		}, {sort: {releaseDate: 1}, limit: 3});
	},
	currentCalendarMovies: function() {
		var i = Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()}
  		}, {sort: { releaseDate: 1 }, limit: 3});
		if (i.count() > 0) {
			return i;
		}
	},
	oneCurrentMovie: function() {
		var i = Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()}
  		}, {sort: { releaseDate: 1 }, limit: 3});
		if (i.count() == 1) {
			return true;
		}
	}
});
