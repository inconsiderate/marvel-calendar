
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
      { data: 'title', title: orion.helpers.getTranslation('comments.schema.title') },
      orion.attributeColumn('froala', 'body', orion.helpers.getTranslation('comments.schema.body')),
    ]
  }
});

/**
 * Now we will attach the schema for that collection. Orion will automatically create the corresponding form.
 */

Comments.attachSchema(new SimpleSchema({
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

Comments.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
