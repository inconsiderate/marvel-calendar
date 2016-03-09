
Template.layout.onRendered(function() {
	this.subscribe('movies');
	this.subscribe('posts');
	$('#calendar').fullCalendar({
		googleCalendarApiKey: 'AIzaSyC1oon8mw5yQv8tPwmcvDlTiIYCwBZnOIY',
		events: 'lh599j7okgva72o6um13nnemd4@group.calendar.google.com',
		height: 390,
	});        
});

Template.upcomingHeaderBanner.onRendered(function() {
	$('.popupie').popup();
});

Template.upcomingHeaderBanner.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do, YYYY");
	}
});

Template.upcomingHeaderBanner.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do, YYYY");
	}
});

Template.homePage.helpers({

	blogPosts: function() {
		return Posts.find({}, {sort: { createdAt: -1 }});
	},
	unconfirmedMovies: function() {
		return Movies.find({
			releaseDate: null,
  		}, {sort: { releaseDate: 1 }});
	}

});


Template.header.helpers({
	currentHeaderMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		}, {sort: { releaseDate: 1 }});
	},
	upcomingHeaderMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
  	},
})