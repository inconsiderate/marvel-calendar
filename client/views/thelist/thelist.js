
Template.thelistpage.helpers({
	currentListMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		}, {sort: { releaseDate: 1 }});
	},
	comingSoonListMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
  	},
  	unconfirmedListMovies: function() {
  		return Movies.find({rumoured: true});
  	}
})