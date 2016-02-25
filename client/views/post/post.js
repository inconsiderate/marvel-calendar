Template.post.helpers({
	"date": function(){
		var m = moment(this.createdAt);
		return moment(m).format("MMMM Do, YYYY");
	}
})