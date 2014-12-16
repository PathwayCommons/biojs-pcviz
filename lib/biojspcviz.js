/*
 * biojs-pcviz
 * https://github.com/armish/biojs-pcviz
 *
 * Copyright (c) 2014 B. Arman Aksoy
 * Licensed under the Apache 2 license.
 */

 var _ = require("underscore");

/**
@class biojspcviz
 */


var biojspcviz = {};
module.exports = biojspcviz;

/**
 * Private Methods
 */
biojspcviz.getWidget = function(networkType, opts) {
	this.opts = this.getOpts(opts);
	var iframe = document.createElement("iframe");
	iframe.width = this.opts.width;
	iframe.height = this.opts.height;
	iframe.src = this.opts.baseurl + "#embed/" + networkType + "/" + this.opts.query;
	iframe.scrolling = "no";
	iframe.frameBorder = 0;
	return iframe;
}

biojspcviz.populateEl = function(iframe) {
	this.el.appendChild(iframe);
}

biojspcviz.getOpts = function(opts) {
	return _.extend({
		baseurl: "http://www.pathwaycommons.org/pcviz/",
		width: "100%",
		height: "100%",
		query: "MDM2",
	}, opts);
}

/*
 * Public Methods
 */

biojspcviz.neighborhood = function(opts) {
	return this.getWidget("neighborhood", opts);
}

biojspcviz.pathsbetween = function(opts) {
	return this.getWidget("pathsbetween", opts);
}