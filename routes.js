
Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
    onAfterAction: function() {
        $('.tooltip-popup').popup();
    },
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('calendarpage', {to: 'content'});
        this.render('marvelGoogleCalendar', {to:'googleCalendar'});
    }
});

Router.route('/marvel', {
    onAfterAction: function() {
        $('.tooltip-popup').popup();
    },
    waitOn: function () {
        return Meteor.subscribe('marvelMovies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('calendarpage', {to: 'content'});
        this.render('marvelGoogleCalendar', {to:'googleCalendar'});
    }
});

Router.route('/dc', {
    onAfterAction: function() {
        $('.tooltip-popup').popup();
    },
    waitOn: function () {
        return Meteor.subscribe('dcMovies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('calendarpage', {to: 'content'});
        this.render('dcGoogleCalendar', {to:'googleCalendar'});    }
});

Router.route('/other', {
    onAfterAction: function() {
        $('.tooltip-popup').popup();
    },
    waitOn: function () {
        return Meteor.subscribe('otherMovies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('calendarpage', {to: 'content'});
        this.render('otherGoogleCalendar', {to:'googleCalendar'});    }
});

Router.route('/thelist', {
    onAfterAction: function() {
    },    
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('thelistpage', {to: 'content'});
    }
});

Router.route('/latest', {
    onAfterAction: function() {
    },
    waitOn: function () {
        Meteor.subscribe('posts');
        Meteor.subscribe('comments');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
    	this.render('theLatest', {to: 'content'});
    }
});

Router.route('/timeline/view-order', {
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
	action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('timelineViewOrder', {to: 'content'});
	},
    data: {
        movie_filter: {
            dep: new Tracker.Dependency,
            db_selector: {},
            sort_order: 1,
            sort_param: 'viewOrder',
            available: Movies.find()
        }
    }
});

Router.route('/timeline/release-date', {
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('timelineReleaseDate', {to: 'content'});
    },
    data: {
        movie_filter: {
            dep: new Tracker.Dependency,
            db_selector: {},
            sort_order: 1,
            sort_param: 'releaseDate',
            available: Movies.find()
        }
    }
});

Router.route('/timeline', {
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
        this.render('timelineViewOrder', {to: 'content'});
    },
    data: {
        movie_filter: {
            dep: new Tracker.Dependency,
            db_selector: {},
            sort_order: 1,
            sort_param: 'viewOrder',
            available: Movies.find()
        }
    }
});
