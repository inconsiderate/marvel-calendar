
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
