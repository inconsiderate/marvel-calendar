Template.movie.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	}
});

Template.movie.onRendered(function() {
    $('.column .image').dimmer({
        on: 'hover'
    });
});