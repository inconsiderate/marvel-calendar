
Template.header.events({
  	'click #nav-cal': function () {
    	Router.go('/calendar');
  	},
  	'click #nav-thelist': function () {
    	Router.go('/thelist');
  	},
  	'click #nav-forum': function () {
    	Router.go('/calendar');
  	}
});

Template.header.onRendered(function() {
	$('.tooltip-popup').popup();
});