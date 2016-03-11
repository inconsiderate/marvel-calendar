
// SINGLE POST
Template.post.helpers({
	"date": function(){
		var m = moment(this.createdAt);
		return moment(m).format("MMMM Do, YYYY");
	},
	"writtenBy": function(){
		var id = this.createdBy;
        return Meteor.users.findOne({_id: id}).profile.name;
	},
});

Template.blogpage.helpers({
	posts: function() {
		return Posts.find({}, {sort: { createdAt: -1 }});
	},
});