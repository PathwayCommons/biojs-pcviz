# biojs-pcviz

[![NPM version](http://img.shields.io/npm/v/biojs-pcviz.svg)](https://www.npmjs.org/package/biojs-pcviz) 
[![Build Status](https://secure.travis-ci.org/armish/biojs-pcviz.png?branch=master)](http://travis-ci.org/armish/biojs-pcviz) 

> BioJS component for PCViz embedded widget

## About
PCViz is a web-based binary interaction visualizer that pulls in data from [Pathway Commons](http://www.pathwaycommons.org/about):

	http://www.pathwaycommons.org/pcviz/

PCViz has an embedded widget option that can be used by other developers to easily show network on their web sites.
This module wraps this functionality around BioJS framework for better and easier integration by developers.

## Getting Started
Install the module with: `npm install biojs-pcviz`

```javascript
var biojspcviz = require('biojs-pcviz');
// Visualizes neighborhood of "BRCA1" gene in a div
biojspcviz.neighborhood({ el: '#yourDivId', query: "BRCA1"}); 
```

## Default Options

```javascript
var opts = {
	// Target HTML element
	el: document.createElement("div"),
	// Base URL for the target PCViz instance
	baseurl: "http://www.pathwaycommons.org/pcviz/",
	// Width of the iframe
	width: "100%",
	// Height of the iframe
	height: "100%",
	// Query gene(s); delimited by comma (",") if more than one
	query: "MDM2",
	// If PCViz doesn't get loaded in this time, onFail will be called
	timeout: 20 * 1000,
	// Callback function for network load event
	onLoad: function(msg) {},
	// Callback function for node clicks; msg contains information about the node
	onNodeClick: function(msg) {},
	// Callback function for edge clicks; msg contains information about the edge
	onEdgeClick: function(msg) {},
	// Callback function for background clicks; msg containts no information
	onBackgroundClick: function(msg) {},
	// Callback function to be called if network doesn't get loaded in timeout miliseconds.
	onFail: function() {}
}
```

## Documentation

#### .neighboorhood(opts)

**Parameter**: `opts`
**Type**: `Object`
**Example**: `{el: ..., query: ...}`

Visualizes the neighborhood of all `query` genes.

Example:
```javascript
// Loads neighborhood of BRCA2
biojspcviz.neighborhood({ el: thatEl, query: "BRCA2"});
```


#### .pathsbetween(opts)

**Parameter**: `opts`
**Type**: `Object`
**Example**: `{el: ..., query: ...}`

Queries the path between two or more genes.
Returns a less dense network compared to `neighborhood`.

Example:
```javascript
// Loads neighborhood of BRCA2
biojspcviz.neighborhood({ el: thatEl, query: "TP53,MDM2"});
```

## Contributing

Please submit all issues and pull requests to the [armish/biojs-pcviz](http://github.com/armish/biojs-pcviz) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/armish/biojs-pcviz/issues).

## License 
This program is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this program. If not, see http://www.gnu.org/licenses/.
