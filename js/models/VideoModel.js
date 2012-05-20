define([
'libs/order!underscore', 
'libs/order!backbone'
], function () {
	var VideoModel = Backbone.Model.extend({
		defaults: {
			poster: 'http://video-js.zencoder.com/oceans-clip.png',
			sources: [
				{
					src: 'http://video-js.zencoder.com/oceans-clip.mp4',
					type: 'video/mp4'
				},
				{
					src: 'http://video-js.zencoder.com/oceans-clip.webm',
					type: 'video/webm'
				},
				{
					src: 'http://video-js.zencoder.com/oceans-clip.ogv',
					type: 'video/ogg'
				}
			],
			id: 'video-1',
			'class': 'video-preview'
		}
	});
	return VideoModel;
});