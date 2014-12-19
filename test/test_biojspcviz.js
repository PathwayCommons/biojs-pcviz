/*
 * biojs-pcviz
 * https://github.com/armish/biojs-pcviz
 *
 * Copyright (c) 2014 B. Arman Aksoy
 * Licensed under the LGPL 3.0 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var biojspcviz = require('../');

describe('biojs-pcviz module', function(){
  describe('#trivialTests()', function(){
  	var opts = { query: "MDM2, MDM4" };
  	chai.expect(biojspcviz).not.to.be.null();
  	
  	//chai.expect(biojspcviz.neighborhood(opts)).not.to.be.null();
	//chai.expect(biojspcviz.pathsbetween(opts)).not.to.be.null();
  });
});
