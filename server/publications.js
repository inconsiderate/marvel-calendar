/**
 * Publish all posts
 */
Meteor.publish('movies', function () {
	return Movies.find({});
});

Meteor.publish('posts', function () {
	return Posts.find({});
});

Meteor.publish('comments', function() {
	return Comments.find({});
})