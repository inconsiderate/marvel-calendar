Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
    onAfterAction: function () {
        setTimeout(function(){
			$('.ui.sidebar').sidebar('toggle');
			$('.image').dimmer({
    			on: 'hover'
  			});
		});
    }
});

Router.route('/', {
    action: function() {
        this.render('header', {to: 'header'});
        this.render('footer', {to: 'footer'});
     	this.render('calendarpage', {to: 'content'});   
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