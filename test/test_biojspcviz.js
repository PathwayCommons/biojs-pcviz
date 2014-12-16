/*
 * biojs-pcviz
 * https://github.com/armish/biojs-pcviz
 *
 * Copyright (c) 2014 B. Arman Aksoy
 * Licensed under the Apache 2 license.
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
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojspcviz.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      biojspcviz.hello('biojs').should.equal("hello biojs");
    });
  });
});
