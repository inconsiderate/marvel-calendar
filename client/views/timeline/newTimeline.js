Template.timelineMenu.onRendered(function() {
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

    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});

Template.timelineMenu.helpers({
    viewOrder: function() {
        if (this.movie_filter.sort_param == 'viewOrder') {
            return true;
        }
    }
});

Template.timelineMenu.events({
    'click .sort-ascending': function(event) {
        $('.sort-ascending').each(function () {
            $(this).show();
        });
        $(event.target).hide();
        var id = $(event.target).attr('id'), order;
        (id == 'sort-timeline-asc-button') ? order = -1 : order = 1;
        this.movie_filter.sort_order = order;
        this.movie_filter.dep.changed();
    }
});

Template.timelineReleaseDate.helpers({
    release: function () {
        if (this.releaseDate) {
            var m = moment(this.releaseDate).utc();
            return moment(m).format("MMMM Do YYYY");
        } else {

            return false;
        }
    },
    movieByDate: function (year) {
        var start = new Date('January 1, '+ year);
        var end = new Date('January 1, '+ year);
        end.setYear(end.getFullYear() + 1);

        var results = Movies.find({
            $and: [{releaseDate: {$gte: start}}, {releaseDate: {$lte: end}}]
        }, {sort: {releaseDate: 1}});

        if ( 0 < results.count() ) {

            return results;
        }
    },
    dateRange: function() {
        this.movie_filter.dep.depend();
        var dateRange = new Array();
        for (var i = 2000; i < 2021; i++) {
            dateRange.push(i);
        }
        if (this.movie_filter.sort_order == -1) {
            dateRange = dateRange.reverse();
        }

        return dateRange;
    }
});

Template.timelineItemReleaseDate.helpers({
    release: function () {
        if (this.releaseDate) {
            var m = moment(this.releaseDate).utc();
            return moment(m).format("MMMM Do YYYY");
        } else {

            return false;
        }
    }
});

Template.timelineViewOrder.helpers({
    moviesByViewOrder: function() {
        this.movie_filter.dep.depend();

        return Movies.find({
            viewOrder: { $type: 1 }
        }, {
            sort: {viewOrder: this.movie_filter.sort_order}
        });
    },
    release: function () {
        if (this.releaseDate) {
            var m = moment(this.releaseDate).utc();

            return moment(m).format("MMMM Do YYYY");
        } else {

            return false;
        }
    }
});