
Template.header.events({
  	'click #marvelbutton': function () {
    	Router.go('/marvel');
  	},
	'click #dcbutton': function () {
		Router.go('/dc');
	},
  	'click #nav-timeline': function () {
    	Router.go('/timeline/view-order');
  	},
  	'click #nav-news': function () {
    	Router.go('/news');
  	}
});

Template.header.onRendered(function() {
	$('.tooltip-popup').popup();
});