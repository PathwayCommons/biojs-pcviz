/*
 * biojs-pcviz
 * https://github.com/armish/biojs-pcviz
 *
 * Copyright (c) 2014 B. Arman Aksoy
 * Licensed under the Apache 2 license.
 */

/**
@class biojspcviz
 */


var  biojspcviz;
module.exports = biojspcviz = function(opts){
  this.el = opts.el;
  this.el.textContent = biojspcviz.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojspcviz.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojspcviz.hello = function (name) {

  return 'hello ' + name;
};

