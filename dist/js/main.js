/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var background = {
  game: null,
  frame: {
    sx: 0,
    sy: 0,
    sw: 0,
    sh: 0,
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  },
  update: function update() {
    this.game.renderSpriteFrame(this.frame);
  },
  init: function init(game) {
    this.game = game;
    this.frame.sw = game.canvas.width;
    this.frame.sh = game.canvas.height;
    this.frame.dw = game.canvas.width;
    this.frame.dh = game.canvas.height;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (background);

/***/ }),

/***/ "./src/js/birdie.js":
/*!**************************!*\
  !*** ./src/js/birdie.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground */ "./src/js/ground.js");

var birdie = {
  game: null,
  frames: [{
    sx: 6,
    sy: 982
  }, {
    sx: 62,
    sy: 982
  }, {
    sx: 118,
    sy: 982
  }],
  maxAnimationStep: 0,
  animationStep: 0,
  counterInterval: 0,
  maxInterval: 5,
  width: 34,
  height: 24,
  x: 0,
  y: 0,
  fallSpeed: 0,
  maxFallSpeed: 7,
  init: function init(game) {
    this.game = game;
    this.x = this.width / 2 + 3;
    this.y = (game.canvas.height - _ground__WEBPACK_IMPORTED_MODULE_0__["default"].frame.sh) / 2;
    this.maxAnimationStep = this.frames.length - 1;
  },
  update: function update() {
    if (this.fallSpeed < this.maxFallSpeed) this.fallSpeed += this.game.gravity;
    this.y += this.fallSpeed;
    this.checkCollisionWithGround();
    this.render();
  },
  render: function render() {
    this.counterInterval++;

    if (!(this.counterInterval % this.maxInterval)) {
      this.counterInterval = 0;
      this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0;
    }

    this.game.context.save();
    this.game.context.translate(this.x, this.y);
    this.game.context.rotate(this.fallSpeed / this.maxFallSpeed);
    this.game.renderSpriteFrame({
      sx: this.frames[this.animationStep].sx,
      sy: this.frames[this.animationStep].sy,
      sw: this.width,
      sh: this.height,
      dx: -this.width / 2,
      dy: -this.height / 2,
      dw: this.width,
      dh: this.height
    });
    this.game.context.restore();
  },
  checkCollisionWithGround: function checkCollisionWithGround() {
    if (this.y + this.height / 2 > _ground__WEBPACK_IMPORTED_MODULE_0__["default"].frame.dy) {
      this.y = _ground__WEBPACK_IMPORTED_MODULE_0__["default"].frame.dy - this.height / 2;
      this.fallSpeed = -this.maxFallSpeed;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (birdie);

/***/ }),

/***/ "./src/js/ground.js":
/*!**************************!*\
  !*** ./src/js/ground.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ground = {
  game: null,
  frame: {
    sx: 584,
    sy: 0,
    sw: 336,
    sh: 112,
    dx: 0,
    dy: 0,
    dw: 336,
    dh: 112
  },
  speed: 3,
  maxOffset: 0,
  update: function update() {
    if (this.frame.dx <= -this.maxOffset) {
      this.frame.dx = 0;
    }

    this.frame.dx -= this.speed;
    this.game.renderSpriteFrame(this.frame);
  },
  init: function init(game) {
    this.game = game;
    this.maxOffset = this.frame.sw - game.canvas.width;
    this.frame.dy = game.canvas.height - this.frame.sh;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ground);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/background.js");
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ground */ "./src/js/ground.js");
/* harmony import */ var _birdie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./birdie */ "./src/js/birdie.js");



var game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  gravity: 0.9,
  init: function init() {
    var _this = this;

    this.context = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', function () {
      _background__WEBPACK_IMPORTED_MODULE_0__["default"].init(_this);
      _ground__WEBPACK_IMPORTED_MODULE_1__["default"].init(_this);
      _birdie__WEBPACK_IMPORTED_MODULE_2__["default"].init(_this);

      _this.animate();
    });
  },
  animate: function animate() {
    var _this2 = this;

    window.requestAnimationFrame(function () {
      _this2.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _background__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    _ground__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    _birdie__WEBPACK_IMPORTED_MODULE_2__["default"].update();
  },
  renderSpriteFrame: function renderSpriteFrame(coordinates) {
    this.context.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);
  }
};
game.init();

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/sass/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Bryan\PhpstormProjects\Flappy-Bird\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! C:\Users\Bryan\PhpstormProjects\Flappy-Bird\src\sass\main.scss */"./src/sass/main.scss");


/***/ })

/******/ });