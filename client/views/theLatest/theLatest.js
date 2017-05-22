Template.theLatest.helpers({
	posts: function() {
		return Posts.find({}, {sort: { createdAt: -1 }});
	},
});

Template.theLatest.events({
	"submit #insertNewPostForm": function (event) {
		$('.ui.accordion').accordion('close', 0);
    }
});

Template.theLatest.onRendered(function() {
    changeMenuTabs('#nav-latest');
});

Template.post.onRendered(function() {
	$('.ui.accordion').accordion();
	$('.ui.accordion').accordion('refresh');
});

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
		return Comments.find({post: this._id});
	}
});

Template.commentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var $body = $(e.target).find('[name=body]');
		var comment = {
			body: $body.val(),
			post: template.data._id
		};
		// var errors = {};
		// if (! comment.body) {
		// 	errors.body = "Please write some content";
		// 	return Session.set('commentSubmitErrors', errors);
		// }
		if (comment.body) {
			Meteor.call('commentInsert', comment, function(error, commentId) {
				if (error){
					throwError(error.reason);
				} else {
					$body.val('');
				}
			});
		}
	}
});

Template.comment.helpers({
	date: function(){
		return moment(this.createdAt).format("MMM Do, YYYY, h:mm a");
	},
	writtenBy: function(){
		var id = this.createdBy;
        return Meteor.users.findOne({_id: id}).profile.name;
	}
});


