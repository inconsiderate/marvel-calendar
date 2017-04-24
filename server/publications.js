/**
 * Publish all posts
 */
Meteor.publish('movies', function () {
	return Movies.find({});
});

Meteor.publish('dcMovies', function () {
	return Movies.find({publisher: 'dc'});
});

Meteor.publish('marvelMovies', function () {
    return Movies.find({publisher: 'marvel'});
});

Meteor.publish('otherMovies', function () {
    return Movies.find({publisher: 'other'});
});
