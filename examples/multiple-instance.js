var biojspcviz = require('biojs-pcviz');

// This is a typical use case where load the n-hood of MDM2
var yourDiv = document.getElementById("yourDiv");
var pcviz = new biojspcviz({
	el: yourDiv,
	query: "MDM2",
	onLoad: function(msg) { console.dir(msg); },
	onNodeClick: function(msg) { console.dir(msg); },
	onEdgeClick: function(msg) { console.dir(msg); }
});
pcviz.neighborhood();

// This is how you can capture a loading failure (no response, etc.)
var yourDiv2 = document.getElementById("yourDiv2");
var pcviz2 = new biojspcviz({
	el: yourDiv2,
	baseurl: "http://smnclkhr32o4u2p9ursdlkfdf/",
	query: "TP53",
	timeout: 3 * 1000,
	onFail: function() {
		console.log("Failed as expected...");
		this.el.innerHTML = "<b>Loading failed!</b>";
		return this;
});
pcviz2.neighborhood();

// This is how you can show the results of a pathsbetween query
var yourDiv3 = document.getElementById("yourDiv3");
var pcviz3 = new biojspcviz({
	el: yourDiv3,
	query: "TP53,MDM2"
});
pcviz3.pathsbetween();
