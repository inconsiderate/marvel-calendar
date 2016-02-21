/**
 * Publish all posts
 */
Meteor.publish('movies', function () {
  return Movies.find({});
});

