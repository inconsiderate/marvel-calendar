
// MOVIE CARD
Template.newmoviecard.onRendered(function() {
    $('.cards .image').dimmer({
        on: 'hover'
    });
});

Template.newmoviecard.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	},
	oneCurrentMovie: function() {
		var i = Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()}
  		}, {sort: { releaseDate: 1 }, limit: 3});
		if (i.count() == 1) {
			return true;
		}
	},
	currentCalendarMovies: function() {
		var i = Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()}
  		}, {sort: { releaseDate: 1 }, limit: 3});
		if (i.count() > 0) {
			return i;
		}
	},

});

// NEW MOVIE CARD
Template.nextUpMovieCard.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	},
});

Template.moviecard.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	},
});