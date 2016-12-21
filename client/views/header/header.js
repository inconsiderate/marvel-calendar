
Template.header.events({
  	'click #nav-cal': function () {
    	Router.go('/calendar');
  	},
  	'click #nav-timeline': function () {
    	Router.go('/timeline/release-date');
  	},
  	'click #nav-news': function () {
    	Router.go('/news');
  	}
});

Template.header.onRendered(function() {
	$('.tooltip-popup').popup();
});