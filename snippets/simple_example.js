// if you don't specify a html file, the sniper will generate a div

var biojspcviz = require("biojs-pcviz");
var pcviz = new biojspcviz({ el: yourDiv, query: "BRCA1"});
// Visualize the neighborhood of "BRCA1" gene in a div using this new instance
pcviz.neighborhood();