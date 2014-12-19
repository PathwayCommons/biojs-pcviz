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
var biojspcviz = {
	loaded: false
};
module.exports = biojspcviz;

biojspcviz.getWidget = function(networkType) {
	var iframe = document.createElement("iframe");
	iframe.width = this.opts.width;
	iframe.height = this.opts.height;
	iframe.src = this.opts.baseurl + "#embed/" + networkType + "/" + this.opts.query;
	iframe.scrolling = "no";
	iframe.frameBorder = 0;

	var that = this;
	receiveMessage = function(event) {
		if(that.opts.baseurl.indexOf(event.origin) !== 0) { return; }

		var messageObj = JSON.parse(event.data);
		switch(messageObj.type) {
			case "pcvizloaded":
				that.loaded = true;
				that.opts.onLoad(messageObj.content);
				break;
			case "pcvizclick":
				switch(messageObj.content.where) {
					case "node":
						that.opts.onNodeClick(messageObj.content.info);
						break;
					case "edge":
						that.opts.onEdgeClick(messageObj.content.info);
						break;
				}
				break;
		}
	};

	window.addEventListener("message", receiveMessage, false);
	return iframe;
}

biojspcviz.populateEl = function(iframe) {
	this.opts.el.appendChild(iframe);
}

biojspcviz.getOpts = function(opts) {
	return _.extend({
		baseurl: "http://www.pathwaycommons.org/pcviz/",
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
}

biojspcviz.graphQuery = function(type, opts) {
	this.opts = this.getOpts(opts);
	this.loaded = false;
	var iframe = this.populateEl(this.getWidget(type));

	var that = this;
	setTimeout(function() {
		if(!that.loaded) {
			that.opts.onFail();
		}
	}, this.opts.timeout);

	return iframe;
}

biojspcviz.neighborhood = function(opts) {
	return this.graphQuery("neighborhood", opts);
}

biojspcviz.pathsbetween = function(opts) {
	return this.graphQuery("pathsbetween", opts);
}