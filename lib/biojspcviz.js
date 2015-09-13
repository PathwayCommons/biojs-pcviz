/*
 * biojs-pcviz
 * https://github.com/armish/biojs-pcviz
 *
 * Copyright (c) 2014 B. Arman Aksoy
 * Licensed under the LGPL 3.0 license.
 */

 var _ = require("underscore"), JSON = require("json3");

/**
@class biojspcviz
 */
var BiojsPcviz = function(opts) {
	var loaded = false;
	var opts = _.extend({
		baseurl: "http://sanderlab.org/pcviz/",
		width: "100%",
		height: "100%",
		query: "MDM2",
		timeout: 20 * 1000,
		onLoad: function(msg) {},
		onNodeClick: function(msg) {},
		onEdgeClick: function(msg) {},
		onBackgroundClick: function(msg) {},
		onFail: function() {}
	}, opts);

	var getWidget = function(networkType) {
		var iframe = document.createElement("iframe");
		iframe.width = opts.width;
		iframe.height = opts.height;
		iframe.src = opts.baseurl + "#embed/" + networkType + "/" + opts.query;
		iframe.scrolling = "no";
		iframe.frameBorder = 0;

		receiveMessage = function(event) {
			if(opts.baseurl.indexOf(event.origin) !== 0) { return; }

			var messageObj = JSON.parse(event.data);
			switch(messageObj.type) {
				case "pcvizloaded":
					loaded = true;
					opts.onLoad(messageObj.content);
					break;
				case "pcvizclick":
					switch(messageObj.content.where) {
						case "node":
							opts.onNodeClick(messageObj.content.info);
							break;
						case "edge":
							opts.onEdgeClick(messageObj.content.info);
							break;
					}
					break;
			}
		};

		window.addEventListener("message", receiveMessage, false);
		return iframe;
	};

	var populateEl = function(iframe) {
		opts.el.appendChild(iframe);
	};

	var graphQuery = function(type) {
		loaded = false;
		var iframe = populateEl(getWidget(type));

		setTimeout(function() {
			if(!loaded) {
				opts.onFail();
			}
		}, opts.timeout);

		return iframe;
	};

	this.neighborhood = function() {
		return graphQuery("neighborhood");
	};

	this.pathsbetween = function() {
		return graphQuery("pathsbetween");
	};

};

module.exports = BiojsPcviz;
