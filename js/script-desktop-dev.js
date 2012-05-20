require.config({
	'baseUrl': '/js/',
	'paths': {
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		jquery: 'libs/jquery-1.7.1',
		mustache: 'libs/mustache'
	}
});

require(['libs/order!jquery', 'views/Video', 'models/VideoModel'], function ($, Video, VideoModel) {

	$(function () {
		var video = new Video({
			el: $('#video-wrapper'),
			model: new VideoModel()
		});
		console.log(video);
		video.render();
	});

});