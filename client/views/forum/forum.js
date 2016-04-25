Template.post.helpers({
	date: function(){
		var m = moment(this.createdAt);
		return moment(m).format("MMMM Do, YYYY");
	},
	writtenBy: function(){
		var id = this.createdBy;
        return Meteor.users.findOne({_id: id}).profile.name;
	},
	comments: function() {
		return Comments.find({});
	}
});

Template.forumPage.helpers({
	posts: function() {
		return Posts.find({}, {sort: { createdAt: -1 }});
	},
});

Template.forumPage.events({
	"submit #insertNewPostForm": function (event) {
		$('.ui.accordion').accordion('close', 0);
    }
})

Template.forumPage.onRendered(function() {
	$('.ui.accordion').accordion();
	$('.ui.accordion').accordion('refresh');
});