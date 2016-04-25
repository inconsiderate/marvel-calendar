Comments.attachSchema(new SimpleSchema({
	body: {
		type: String,
		label: 'Body'
	},
	postId: orion.attribute('hasOne', { 
		label: 'Post ID'
	},{
		collection: Posts,
		titleField: 'title',
		publicationName: 'commentTitle'
	}),
	/**
	* This attribute sets the user id of the user that created this post automatically.
	*/
	createdBy: orion.attribute('createdBy'),
	createdAt: orion.attribute('createdAt')
}));
