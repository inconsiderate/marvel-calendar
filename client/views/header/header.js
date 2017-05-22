
Template.header.events({
    'click #marvelbutton': function () {
        Router.go('/');
    },
    'click #dcbutton': function () {
        Router.go('/dc');
    },
    'click #nav-timeline': function () {
        Router.go('/timeline/view-order');
    },
    'click #nav-cal': function () {
        Router.go('/');
    },
    'click #nav-latest': function () {
        Router.go('/latest');
    }
});

Template.header.onRendered(function() {
	$('.tooltip-popup').popup();
});