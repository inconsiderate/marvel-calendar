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
        this.movie_filter.dep.depend();
        var query = {sort: {}};
        query.sort[this.movie_filter.sort_param] = this.movie_filter.sort_order;
        console.log(this.movie_filter.db_selector);
        return Movies.find(this.movie_filter.db_selector, query);
        // return Movies.find({ attributes: { $in: ['featureFilm','mcu'] }}, {sort: { releaseDate: 1 }});
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
	// 'click #movies-checkbox': function() {
	// 	$('#tv-checkbox').checkbox('uncheck');
	// },
	// 'click #tv-checkbox': function() {
	// 	$('#movies-checkbox').checkbox('uncheck');
	// },
    'click .sort-ascending': function(event) {
        $('.sort-ascending').each(function () {
            $(this).show();
        });
        $(event.target).hide();
        var id = $(event.target).attr('id'), order;
        (id == 'sort-timeline-asc-button') ? order = -1 : order = 1;
        this.movie_filter.sort_order = order;
        this.movie_filter.dep.changed();
    },
    'click .sort-order': function(event) {
        $('.sort-order').each(function () {
            $(this).show();
        });
        $(event.target).hide();
        var id = $(event.target).attr('id'), order;
        (id == 'sort-timeline-chrono-button') ? order = 'releaseDate' : order = 'viewOrder';
        this.movie_filter.sort_param = order;
        this.movie_filter.dep.changed();
    },
    'click .ui.checkfilters': function() {
		$('#masterbox').checkbox('uncheck');
		var query = {};
		var attributes = $('.checkfilters').checkbox('is checked');
		var master = $('#masterbox').checkbox('is checked');

        if (attributes[0] == true) (query.attributes) ? query.attributes.$all.push("featureFilm") : query = {attributes: {$all: ["featureFilm"]}};
        if (attributes[1] == true) (query.attributes) ? query.attributes.$all.push("tv") : query = {attributes: {$all: ["tv"]}};
        if (attributes[2] == true) (query.attributes) ? query.attributes.$all.push("mcu") : query = {attributes: {$all: ["mcu"]}};
        if (attributes[3] == true) {query.releaseDate = {$exists: true}}
        if (this.movie_filter.sort_param == 'viewOrder') {
            console.log('lol');
            query.viewOrder = {$exists: true}
        }
        // if (attributes[3] == true) query.attributes.releaseDate = {$gte: new Date()};
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
