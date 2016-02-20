/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields
 * we will show in the index of the collection in the admin
 */
Movies = new orion.collection('movies', {
  singularName: orion.helpers.getTranslation('movies.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('movies.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('movies.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: orion.helpers.getTranslation('movies.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'airing', title: 'on air' },
      { data: 'rumoured', title: 'rumoured' },
      { data: 'title', title: orion.helpers.getTranslation('movies.schema.title') },
      { data: 'releaseDate', title: orion.helpers.getTranslation('movies.schema.releaseDate') },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('image', 'logo', orion.helpers.getTranslation('movies.schema.logo')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('movies.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('movies.schema.createdAt'))
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */

Movies.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  airing: {
    type: Boolean,
    label: 'Airing'
  },
  releaseDate: {
    type: Date,
    label: 'Release Date'
  },
  description: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('posts.schema.description') // We use this function to make i18n work in autoform
  }),  
  trailer: {
    type: String,
    label: 'Trailer',
    optional: true
  },
  watchnow: {
    type: String,
    label: 'Watch Now',
    optional: true
  },
  trakt: {
    type: String,
    label: 'Trakt',
    optional: true
  },
  rumoured: {
    type: Boolean,
    label: 'Rumoured',
    optional: true
  },
  /**
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  logo: orion.attribute('image', {
      label: 'Logo Image',
      optional: true
  }),
  banner: orion.attribute('image', {
      label: 'Banner Image',
      optional: true
  }),
  /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the movies
 * collection to easily get the user
 */

Movies.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
