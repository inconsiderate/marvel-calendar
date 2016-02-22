
Template.movie.onRendered(function() {
    $('.column .image').dimmer({
        on: 'hover'
    });
});

Template.movie.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("dddd, MMMM Do YYYY");
	}
	//return formatted date item
})