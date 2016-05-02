
Comments = new orion.collection('comments', {
  singularName: orion.helpers.getTranslation('comments.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('comments.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('comments.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
     */
    title: orion.helpers.getTranslation('comments.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { 
        data: "postId", 
        title: "Post ID" 
      },{ 
        data: "createdAt", 
        title: "Created At" 
      },{ 
        data: "createdBy", 
        title: "Author" 
      },{ 
        data: "body", 
        title: "Body" 
      }      
    ]
  }
});

Comments.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

Meteor.methods({
    commentInsert: function(commentAttributes) {
        // check(this.userId, String);
        // check(commentAttributes, {
        //     postId: String,
        //     body: String
        // });
    
        var user = Meteor.user();
        // var post = Posts.findOne(commentAttributes.postId);

        // if (!post)
        // throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    
        comment = _.extend(commentAttributes, {
        createdBy: user._id,
        createdAt: new Date()
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