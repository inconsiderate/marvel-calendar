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
  }
});
