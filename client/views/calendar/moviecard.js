
// MOVIE CARD
Template.moviecard.onRendered(function() {
    $('.cards .image').dimmer({
        on: 'hover'
    });
});

Template.moviecard.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	}
});

// NEW MOVIE CARD
