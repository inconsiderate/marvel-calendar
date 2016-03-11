

Template.header.events({
// 	"click .menubutton": function (event) {
// 		$('.menu.sidebar').sidebar('toggle');
// 	},
  	'click #nav-cal': function () {
  		event.preventDefault();
    	Router.go('/calendar');
  	},
  	'click #nav-shows': function () {
    	Router.go('/thelist');
  	},
  	'click #nav-blog': function () {
    	Router.go('/blog');
  	}
});

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
