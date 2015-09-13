var biojspcviz = require('biojs-pcviz');

// This is a typical use case where load the n-hood of MDM2
var pcviz = new biojspcviz({
	el: yourDiv,
	query: "MDM2",
	onLoad: function(msg) { console.dir(msg); },
	onNodeClick: function(msg) { console.dir(msg); },
	onEdgeClick: function(msg) { console.dir(msg); }
});
pcviz.neighborhood();
