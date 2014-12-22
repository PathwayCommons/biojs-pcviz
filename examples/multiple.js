var biojspcviz = require('biojs-pcviz');

// This is a typical use case where load the n-hood of MDM2
var pcviz = new biojspcviz();
var yourDiv = document.getElementById("yourDiv");
pcviz.neighborhood(
{ 
	el: yourDiv, 
	query: "MDM2",
	onLoad: function(msg) { console.dir(msg); },
	onNodeClick: function(msg) { console.dir(msg); },
	onEdgeClick: function(msg) { console.dir(msg); }
});

// This is how you can capture a loading failure (no response, etc.)
var pcviz2 = new biojspcviz();
var yourDiv2 = document.getElementById("yourDiv2");
pcviz2.neighborhood(
{ 
	el: yourDiv2, 
	baseurl: "http://smnclkhr32o4u2p9ursdlkfdf/",
	query: "TP53",
	onFail: function() { console.log("Load failed..."); }
});

// This is how you can show the results of a pathsbetween query
var pcviz3 = new biojspcviz();
var yourDiv3 = document.getElementById("yourDiv3");
pcviz3.pathsbetween(
{ 
	el: yourDiv3, 
	query: "TP53,MDM2"
});