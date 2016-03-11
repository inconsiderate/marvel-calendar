
Template.header.events({
  	'click #nav-cal': function () {
    	Router.go('/calendar');
  	},
  	'click #nav-thelist': function () {
    	Router.go('/thelist');
  	},
  	'click #nav-blog': function () {
    	Router.go('/blog');
  	}
});