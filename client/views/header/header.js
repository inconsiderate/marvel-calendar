
Template.header.events({
  	'click #nav-cal': function () {
    	Router.go('/calendar');
  	},
  	'click #nav-thelist': function () {
    	Router.go('/thelist');
  	},
  	'click #nav-news': function () {
    	Router.go('/news');
  	}
});

Template.header.onRendered(function() {
	$('.tooltip-popup').popup();
});