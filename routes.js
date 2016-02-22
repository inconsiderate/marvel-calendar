Router.configure({
	loadingTemplate: 'loading',
	layoutTemplate: 'layout',
    onAfterAction: function () {
        setTimeout(function(){

		});
    }
});

Router.route('/', {
    action: function() {
        this.render('header', {to: 'header'});
    }
});
