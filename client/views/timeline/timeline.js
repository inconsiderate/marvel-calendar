Template.timeline.onRendered(function() {
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;
	hideBlocks(timelineBlocks, offset);
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});
	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}
	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
	changeMenuTabs('#nav-timeline');
	$('#masterbox').checkbox('check');
});

Template.timeline.helpers({
	upcomingTimelineItems: function() {
        //TODO: toggle sorting asc, desc
		return Movies.find({
			releaseDate: {$gte: new Date()}
  		}, {sort: { releaseDate: 1 }});
  	},
	filtered_movies: function() {
		// if (this.movie_filter.db_selector == "upcoming") {
		// 	this.movie_filter.dep.depend();
		// 	return Movies.find({
		// 		releaseDate: {$gte: new Date()},
		//   	}, {sort: { releaseDate: 1 }});			
		// } else {
			this.movie_filter.dep.depend();
			return Movies.find(this.movie_filter.db_selector, {sort: { releaseDate: -1 }});
			// return Movies.find({ attributes: { $all: ['featureFilm','mcu'] }}, {sort: { releaseDate: 1 }});
		// }
	}
});

Template.timeline.events({
	'click #masterbox': function() {
		if ($('#masterbox').checkbox('is checked')) {
			$('.ui.checkfilters').checkbox('uncheck');
			this.movie_filter.db_selector = {};
			this.movie_filter.dep.changed();
		}
	},
	'click #movies-checkbox': function() {
		$('#tv-checkbox').checkbox('uncheck');
	},
	'click #tv-checkbox': function() {
		$('#movies-checkbox').checkbox('uncheck');
	},	'click .ui.checkfilters': function() {
		$('#masterbox').checkbox('uncheck');
		var query = {
			attributes: {
				$all: []
			}
		};
		var attributes = $('.checkfilters').checkbox('is checked');
		var master = $('#masterbox').checkbox('is checked');
		if (attributes[0] == true) query.attributes.$all.push("featureFilm");
		if (attributes[1] == true) query.attributes.$all.push("tv");
		if (attributes[2] == true) query.attributes.$all.push("mcu");
		if (attributes[3] == true) query.attributes.releaseDate = {$gte: new Date()};
		if (master == true) query = {};
		this.movie_filter.db_selector = query;
		this.movie_filter.dep.changed();
	}
});

Template.timelineItem.helpers({
	release: function() {
	    if (this.releaseDate) {
	        var m = moment(this.releaseDate).utc();
	        return moment(m).format("MMMM Do YYYY");
	    } else {
	        return false;
	    }
	}	
});
