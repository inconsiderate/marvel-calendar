
// SINGLE MOVIE
Template.movie.onRendered(function() {
    $('.blurring.column .image').dimmer({
        on: 'hover'
    });
});

Template.movie.helpers({
	"release": function(){
		var m = moment(this.releaseDate);
		return moment(m).format("dddd, MMMM Do YYYY");
	}
});

// MOVIE LISTS
Template.movieList.helpers({
	currentMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		}, {sort: { releaseDate: 1 }});
	},

	upcomingMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
	},

	previousMovies: function() {
		return Movies.find({
			releaseDate: {$lt: new Date()},
			airing: false
  		}, {sort: { releaseDate: 1 }});
	}
})