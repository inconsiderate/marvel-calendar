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
});

Template.timeline.helpers({
	upcomingTimelineItems: function() {
        //TODO: toggle sorting asc, desc
		return Movies.find({
			releaseDate: {$gte: new Date()},
  		}, {sort: { releaseDate: 1 }});
  	},
	all_movies: function() {
      this.dep.depend();
      return Movies.find(this.db_selector).count();
    },
    filtered_movies: function() {
      this.movie_filter.dep.depend();
      return Movies.find(this.movie_filter.db_selector);
    }
});

Template.timeline.events({
	'click button.filter-button': function(event, template) {
		var target = $(event.target);
		// 'this' inside event handlers is the data context of the template!  Hooray!
		this.movie_filter.db_selector = target.data('filter-value');
		this.movie_filter.dep.changed();
	},
	'click #upcomingFilterButton': function(event) {
		var now = new Date();
		this.movie_filter.db_selector = "{releaseDate: {$gte: " + now + "},}, {sort: { releaseDate: 1 }}";
		console.log(this.movie_filter.db_selector);
		this.movie_filter.dep.changed();
	}
});
