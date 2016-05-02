Comments.attachSchema(new SimpleSchema({
	body: {
		type: String,
		label: 'Body'
	},
	post: { 
		type: String,
		label: 'Post ID'
	},
	/**
	* This attribute sets the user id of the user that created this post automatically.
	*/
	createdBy: orion.attribute('createdBy'),
	createdAt: orion.attribute('createdAt')
}));
