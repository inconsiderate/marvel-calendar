Meteor.methods({
  likePost: function(postId) {
    check(postId, String);
    if (!this.userId) return;
    var likes = Likes.find({ userId: this.userId, postId: postId }).count();
    if (likes) return;
    Likes.insert({ userId: this.userId, postId: postId });
    Posts.update(postId, { $inc: { likesCount: 1 } });
  },
  unlikePost: function(postId) {
    check(postId, String);
    if (!this.userId) return;
    var likes = Likes.find({ userId: this.userId, postId: postId }).count();
    if (!likes) return;
    Likes.remove({ userId: this.userId, postId: postId });
    Posts.update(postId, { $inc: { likesCount: -1 } });
  },

  movieByDate: function(date) {
    console.log(date);
    var dateRange = new Array();
    for (var i = 2010; i < 2021; i++) {
      var start = new Date('January 1, '+ i);
      var end = new Date();

      end.setYear(start.getFullYear() + 1);

      dateRange[new Date('January 1, '+ i)] = Movies.find({
        $and: [ { releaseDate: { $gte: start } }, { releaseDate: { $lte: end } } ],
      }, {sort: { releaseDate: 1 }});
    }

  }
});
