(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["f5"] = factory();
	else
		root["f5"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var f5 = {};

	f5.Swatch = function (colorMode) {
	  this.pool = [];
	  this.hi = function () {
	    console.log("hi");
	  };
	  this.add = function (c) {
	    this.pool.push(c);
	  };

	  this.get = function (i) {
	    return this.pool[i];
	  };

	  this.random = function () {
	    return this.pool[Math.floor(Math.random() * this.pool.length)];
	  };
	};

	f5.Grid = function () {
	  this.cols = 10;
	  this.rows = 10;
	  this.w = 30;
	  this.h = 30;

	  this.set = function (cols, rows, w, h) {
	    this.cols = cols;
	    this.rows = rows;
	    this.w = w;
	    this.h = h;
	  };

	  this.go = function (cb) {
	    for (var r = 0; r < this.rows; r++) {
	      for (var c = 0; c < this.cols; c++) {
	        push();
	        translate(c * this.w, r * this.h);
	        cb();
	        pop();
	      }
	    }
	  };
	};

	module.exports = f5;

/***/ }
/******/ ])
});
;
