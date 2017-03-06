/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.NWMH_Wizard = function (data) {
		var Wizard = new _App2.default(data.postcodes, data.externals);

		Wizard.init();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Route = __webpack_require__(2);

	var _Route2 = _interopRequireDefault(_Route);

	var _Decisions = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
		/**
	  * class constructor
	  * 
	  */
		function App(postcodes, externalPaths) {
			_classCallCheck(this, App);

			this.routes = new _Route2.default();
			this.postcodes = postcodes;
			this.decisions = _Decisions.Decisions;
			this.externals = externalPaths;
			this.selectedAge = null;
			this.pages = [];
		}

		/**
	  * initialise the app
	  * 
	  */


		_createClass(App, [{
			key: "init",
			value: function init() {
				this._setNav();
				this._setBacks();
				this._setAgeSelect();
				this._setPostcodeEntry();
				this._setExternalLinks();

				this.pages.push("index");
			}

			/**
	   * navigate to the next page
	   *	 
	   */

		}, {
			key: "next",
			value: function next(path) {
				var route = this.routes.get(path);

				this._hideAll();
				this._show(route);

				this.pages.push(route);
			}
			/**
	   * navigate to the previous page
	   *	 
	   */

		}, {
			key: "previous",
			value: function previous(e) {
				e.preventDefault();

				this.pages.pop();
				var previousPage = this.pages.slice(-1);

				this._hideAll();
				this._show(previousPage);
			}

			/**
	   * display the page
	   *	 
	   */

		}, {
			key: "_show",
			value: function _show(section) {
				document.querySelector("#" + section).classList.add("active");
			}

			/**
	   * hide all of the other pages
	   *
	   */

		}, {
			key: "_hideAll",
			value: function _hideAll() {
				var removable = document.getElementsByClassName("page");

				for (var i = 0; i < removable.length; i++) {
					removable[i].classList.remove("active");
				}
			}

			/**
	   * initialise all of the back buttons on the app
	   * 
	   */

		}, {
			key: "_setBacks",
			value: function _setBacks() {
				var _this = this;

				var backs = document.getElementsByClassName("back-btn");

				for (var i = 0; i < backs.length; i++) {
					backs[i].addEventListener("click", function (e) {
						_this.previous(e);
					});
				};
			}

			/**
	   * set the event listeners for the navigation links buttons
	   * 
	   */

		}, {
			key: "_setNav",
			value: function _setNav() {
				var _this2 = this;

				var navs = document.getElementsByClassName("nav");

				for (var i = 0; i < navs.length; i++) {
					navs[i].addEventListener("click", function (e) {
						e.preventDefault();
						var path = e.target.hash.substr(1);

						_this2.next(path);
					});
				};
			}

			/**
	   * set the event listeners for the age selection buttons
	   * 
	   */

		}, {
			key: "_setAgeSelect",
			value: function _setAgeSelect() {
				var _this3 = this;

				var buttons = document.getElementsByClassName("age-select");

				for (var i = 0; i < buttons.length; i++) {
					buttons[i].addEventListener("click", function (e) {
						e.preventDefault();
						var age = e.target.dataset.age;
						_this3._setAge(age);
					});
				};
			}

			/**
	   * set the age value against the class
	   * 
	   */

		}, {
			key: "_setAge",
			value: function _setAge(age) {
				this.selectedAge = age;

				if (this._isMinor(age)) {
					return this.next("minors");
				}

				return this.next("postcode");
			}

			/**
	   * has the user selected an age which indicates they are a minor
	   *
	   */

		}, {
			key: "_isMinor",
			value: function _isMinor(age) {
				return age === "under_15";
			}

			/**
	   * add the event listener to the postcode button
	   * 
	   */

		}, {
			key: "_setPostcodeEntry",
			value: function _setPostcodeEntry() {
				var _this4 = this;

				document.querySelector(".postcode-btn").addEventListener("click", function (e) {
					e.preventDefault();

					_this4._postcodeAdded();
				});
			}

			/**
	   * the user added a postcode
	   * 
	   */

		}, {
			key: "_postcodeAdded",
			value: function _postcodeAdded() {
				var postcode = document.getElementById("postcode-field").value;

				if (this.selectedAge === null) {
					return this.next("urgent-contact");
				}

				var determination = this._makeDetermination(postcode);

				this._makeDecision('postcode', determination, this.selectedAge);
			}

			/**
	   * make a postcode determination
	   * 
	   */

		}, {
			key: "_makeDetermination",
			value: function _makeDetermination(postcode) {
				var postcodes = this.postcodes[this.selectedAge];

				return postcodes.includes(parseInt(postcode)) ? "included" : "excluded";
			}

			/**
	      * use the decision tree to determine where to go next
	      *
	      */

		}, {
			key: "_makeDecision",
			value: function _makeDecision() {
				var decisions = this.decisions;

				for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
					keys[_key] = arguments[_key];
				}

				keys.forEach(function (index) {
					decisions = decisions[index];
				});

				this.next(decisions);
			}

			/**
	   * set the actions for each of the external links
	   * 
	   */

		}, {
			key: "_setExternalLinks",
			value: function _setExternalLinks() {
				var _this5 = this;

				var links = document.getElementsByClassName("external");

				Array.from(links).forEach(function (link) {
					link.addEventListener("click", function (e) {
						e.preventDefault();

						_this5._goExternal(e.target.dataset.route);
					});
				});
			}

			/**
	   * execute an external link
	   * 
	   */

		}, {
			key: "_goExternal",
			value: function _goExternal(target) {
				for (var route in this.externals) {
					if (route === target) {
						window.location = this.externals[route];
					}
				}
			}
		}]);

		return App;
	}();

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Routes = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Route = function () {
		/**
	  * class constructor
	  * 
	  */
		function Route() {
			_classCallCheck(this, Route);

			this.routes = _Routes.Routes;
		}

		_createClass(Route, [{
			key: "get",
			value: function get(path) {
				for (var route in this.routes) {
					if (route === path) {
						return this.routes[route];
					}
				}
			}
		}]);

		return Route;
	}();

	exports.default = Route;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Routes = exports.Routes = Object.freeze({
		"": "index",
		"home": "index",
		"medical-attention": "m-attention",
		"further-information": "f-info",
		"professional-help": "pro-help",
		"urgent-contact": "urgent-contact",
		"service-usage": "service-use",
		"postcode": "postcode-entry",
		"similar-youth-organisations": "similar-youth-organisations",
		"similar-adult-organisations": "similar-adult-organisations",
		"youth": "youth",
		"adult": "adult",
		"minors": "minors"
	});

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Decisions = exports.Decisions = Object.freeze({
		age: {
			under_15: 'minors',
			under_24: 'postcode-entry',
			over_24: 'postcode-entry'
		},
		postcode: {
			included: {
				under_24: 'youth',
				over_24: 'adult'
			},
			excluded: {
				under_24: 'similar-youth-organisations',
				over_24: 'similar-adult-organisations'
			}
		}
	});

/***/ }
/******/ ]);