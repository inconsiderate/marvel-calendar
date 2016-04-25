
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

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});