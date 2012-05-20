/**
 *
 *
 */
 define([
'libs/text!templates/video.stache',
'libs/order!underscore', 
'libs/order!backbone',
'libs/order!mustache'
 	], function (template){
	var Video = Backbone.View.extend({

	 	events: {
	 		'click .fullscreen': 'fullscreen'
	 	},

	 	initialize: function () {
	 		this.template = Mustache.compile(template);
	 	},

	 	render: function() {
	 		var video = $(this.template(this.model.toJSON()));
	 		this.$el.append(video);
	 		this.video = video[0];
	 	},
	 	//events
	 	fullscreen: function () {
	 		this.video.webkitRequestFullScreen();
	 	}
	});
	return Video;
 })
 