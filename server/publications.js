/**
 * Publish all posts
 */
Meteor.publish('movies', function () {
  var ip = this.connection.clientAddress;
  return Movies.find({});
});

