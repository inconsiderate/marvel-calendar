var changeMenuTabs = function(selected) {
    $('.pointing.menu a').each(function(index){
        $(this).removeClass('active');
    })
    $(selected).addClass('active');
}

Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
});

Router.route('/', {    
    onAfterAction: function() {
        changeMenuTabs('#nav-cal');
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
        changeMenuTabs('#nav-cal');
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
        changeMenuTabs('#nav-thelist');
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
        changeMenuTabs('#nav-forum');
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