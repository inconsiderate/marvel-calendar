Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
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
    }
});

Router.route('/calendar', {
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
    }
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

Router.route('/news', {
    onAfterAction: function() {
    },
    waitOn: function () {
        Meteor.subscribe('posts');
        Meteor.subscribe('comments');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
    	this.render('forumPage', {to: 'content'});
    }
});

Router.route('/timeline', {
    waitOn: function () {
        return Meteor.subscribe('movies');
    },
	action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('timeline', {to: 'content'});   
	},
    data: { 
      movie_filter: {
        dep: new Tracker.Dependency,
        db_selector: {},
        available: Movies.find()
      } 
    }
});
