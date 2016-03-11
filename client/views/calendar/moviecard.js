
// SINGLE MOVIE
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

Template.comingSoonMovie.onRendered(function() {
	$('.tooltip-popup').popup();
});

Template.comingSoonMovie.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	}
});