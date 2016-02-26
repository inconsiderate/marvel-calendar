
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
      orion.attributeColumn('image', 'image', orion.helpers.getTranslation('posts.schema.image')),
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
   * WARNING: the url of the image will not be saved in .image, it will be saved in .image.url.
   */
  image: orion.attribute('image', {
      label: 'Image',
      optional: true
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
