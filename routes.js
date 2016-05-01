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

Router.route('/forum', {
    onAfterAction: function() {
    },
    waitOn: function () {
        Meteor.subscribe('comments');
        Meteor.subscribe('posts');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
    	this.render('forumPage', {to: 'content'});
    }
});

Router.route('/forum/:_id', {
	action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('forumPage', {to: 'content'});   
	},
	data: function() {
		return Posts.findOne({_id: this.params._id});
	}
})