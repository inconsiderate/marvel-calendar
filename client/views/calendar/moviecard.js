
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
	},
	oneCurrentMovie: function() {
		var i = Movies.find({
			$or: [ { endDate: { $gte: new Date() } }, { endDate: null } ],
  			releaseDate: {$lt: new Date()}
  		}, {sort: { releaseDate: 1 }, limit: 3});
		if (i.count() == 1) {
			return true;
		}
	}

});

// NEW MOVIE CARD
Template.nextUpMovieCard.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("MMMM Do YYYY");
	},
});