var changeMenuTabs = function(selected) {
    $('.pointing.menu a').each(function(index){
        $(this).removeClass('active');
    })
    $(selected).addClass('active');
}

Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
    onAfterAction: function () {
    },
    onAfterAction: function () {
        setTimeout(function(){
        })
    }
});

Router.route('/', {
    action: function() {
    	this.redirect('/calendar');
    }
});

Router.route('/calendar', {
    onAfterAction: function() {
        changeMenuTabs('#nav-cal');
    },
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('calendarpage', {to: 'content'});   
    }
});

Router.route('/thelist', {
    onAfterAction: function() {
        changeMenuTabs('#nav-shows');
    },
    action: function() {
    	this.redirect('/calendar');
    }
});

Router.route('/blog', {
    onAfterAction: function() {
        changeMenuTabs('#nav-blog');
    },
    action: function() {
    	this.render('blog', {to: 'content'});
    }
});

Router.route('/post/:_id', {
	action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('blogPage', {to: 'content'});   
	},
	data: function() {
		return Posts.findOne({_id: this.params._id});
	}
})