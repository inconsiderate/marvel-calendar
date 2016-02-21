/**
 * Add your routes here
 */

RouterLayer.route('/', {
	name: 'home',
	template: 'home',
	layout: 'layout'
});

RouterLayer.route('/movies/:_id', {
	name: 'movie',
	template: 'movie',
	layout: 'layout'
});
