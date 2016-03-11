

Template.calendarpage.helpers({
	currentHeaderMovies: function() {
		return Movies.find({
  			releaseDate: {$lt: new Date()},
  			airing: true
  		}, {sort: { releaseDate: 1 }});
	},
	upcomingHeaderMovies: function() {
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
  	},
  	rumouredHeaderMovies: function() {
		return Movies.find({rumoured: true});
  	},
})