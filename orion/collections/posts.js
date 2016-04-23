
Posts = new orion.collection('posts', {
  singularName: orion.helpers.getTranslation('posts.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('posts.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('posts.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
     */
    title: orion.helpers.getTranslation('posts.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'title', title: orion.helpers.getTranslation('posts.schema.title') },
      orion.attributeColumn('froala', 'body', orion.helpers.getTranslation('posts.schema.body')),
    ]
  }
});

/**
 * Now we will attach the schema for that collection. Orion will automatically create the corresponding form.
 */

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  body: orion.attribute('froala', {
      label: orion.helpers.getTranslation('posts.schema.body') // We use this function to make i18n work in autoform
  }),
  /**
   * This attribute sets the user id of the user that created this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
  
Meteor.methods({
  insertNewPost: function(data) {
    console.log('some shit', data);
    check(this.userId, String);
    check(data, {
      postId: String,
      body: String
    });

    var user = Meteor.user();
    var post = Posts.findOne(data.postId);

    if (!post) {
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    }

    comment = _.extend(data, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    // update the post with the number of comments
    // Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // create the comment, save the id
    comment._id = Comments.insert(comment);

    // now create a notification, informing the user that there's been a comment
    // createCommentNotification(comment);

    return comment._id;
  }
});
