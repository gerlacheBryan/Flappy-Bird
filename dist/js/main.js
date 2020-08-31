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

/***/ "./src/js/TubesPair.js":
/*!*****************************!*\
  !*** ./src/js/TubesPair.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TubesPair; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TubesPair = /*#__PURE__*/function () {
  function TubesPair(game) {
    _classCallCheck(this, TubesPair);

    this.game = game;
    this.spaceBetweenTubes = 80;
    this.x = game.canvas.width;
    this.speed = 3;
    this.width = 52;
    this.height = 317;
    this.yTop = -Math.floor(Math.random() * 280) - 25;
    this.yBottom = this.yTop + this.height + this.spaceBetweenTubes;
    this.tubeTopFrame = {
      sx: 113,
      sy: 647,
      sw: this.width,
      sh: this.height,
      dx: 0,
      dy: 0,
      dw: this.width,
      dh: this.height
    };
    this.tubeBottomFrame = {
      sx: 168,
      sy: 647,
      sw: this.width,
      sh: this.height,
      dx: 0,
      dy: 0,
      dw: this.width,
      dh: this.height
    };
  }

  _createClass(TubesPair, [{
    key: "update",
    value: function update() {
      this.x -= this.speed;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      // tube du haut
      this.game.context.save();
      this.game.context.translate(this.x, this.yTop);
      this.game.renderSpriteFrame(this.tubeTopFrame);
      this.game.context.restore(); // tube du bas

      this.game.context.save();
      this.game.context.translate(this.x, this.yBottom);
      this.game.renderSpriteFrame(this.tubeBottomFrame);
      this.game.context.restore();
    }
  }]);

  return TubesPair;
}();



/***/ }),

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
    if (this.game.hasStarted) {
      if (this.fallSpeed < this.maxFallSpeed) this.fallSpeed += this.game.gravity;
      this.y += this.fallSpeed;
      this.checkCollisionWithGround();
      this.checkCollisionWithTubes();
    }

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
  goUp: function goUp() {
    this.fallSpeed = -this.maxFallSpeed;
  },
  checkCollisionWithGround: function checkCollisionWithGround() {
    if (this.y + this.height / 2 > _ground__WEBPACK_IMPORTED_MODULE_0__["default"].frame.dy) {
      this.y = _ground__WEBPACK_IMPORTED_MODULE_0__["default"].frame.dy - this.height / 2;
      this.goUp();
    }
  },
  checkCollisionWithTubes: function checkCollisionWithTubes() {
    var _this = this;

    this.game.tubesPairs.forEach(function (tubePair) {
      if (_this.x + _this.width / 2 > tubePair.x && _this.x - _this.width / 2 < tubePair.x + tubePair.width) {
        if (_this.y - _this.height / 2 < tubePair.yTop + tubePair.height || _this.y + _this.height / 2 > tubePair.yBottom) {
          _this.game.cancelAnimation();
        }
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (birdie);

/***/ }),

/***/ "./src/js/gameController.js":
/*!**********************************!*\
  !*** ./src/js/gameController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _birdie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdie */ "./src/js/birdie.js");

var gameController = {
  init: function init(game) {
    window.addEventListener('keydown', function (e) {
      if (e.key === 'j') {
        if (!game.hasStarted) {
          game.hasStarted = true;
        }

        _birdie__WEBPACK_IMPORTED_MODULE_0__["default"].goUp();
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gameController);

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
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/js/gameController.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/js/background.js");
/* harmony import */ var _TubesPair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TubesPair */ "./src/js/TubesPair.js");
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ground */ "./src/js/ground.js");
/* harmony import */ var _birdie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./birdie */ "./src/js/birdie.js");





var game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  gravity: 0.9,
  hasStarted: false,
  tubesPairs: [],
  frameCounter: 0,
  frameInterval: 80,
  maxTubesPairs: 3,
  requestId: 0,
  init: function init() {
    var _this = this;

    this.context = this.canvas.getContext('2d');
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.addEventListener('load', function () {
      _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].init(_this);
      _background__WEBPACK_IMPORTED_MODULE_1__["default"].init(_this);
      _ground__WEBPACK_IMPORTED_MODULE_3__["default"].init(_this);
      _birdie__WEBPACK_IMPORTED_MODULE_4__["default"].init(_this);

      _this.animate();
    });
  },
  animate: function animate() {
    var _this2 = this;

    this.requestId = window.requestAnimationFrame(function () {
      _this2.animate();
    });
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    _background__WEBPACK_IMPORTED_MODULE_1__["default"].update();

    if (this.hasStarted) {
      if (this.frameCounter++ > this.frameInterval) {
        if (this.tubesPairs.length >= this.maxTubesPairs) this.tubesPairs.splice(0, 1);
        this.tubesPairs.push(new _TubesPair__WEBPACK_IMPORTED_MODULE_2__["default"](this));
        this.frameCounter = 0;
      }

      this.tubesPairs.forEach(function (tubePair) {
        tubePair.update();
      });
    }

    _ground__WEBPACK_IMPORTED_MODULE_3__["default"].update();
    _birdie__WEBPACK_IMPORTED_MODULE_4__["default"].update();
  },
  renderSpriteFrame: function renderSpriteFrame(coordinates) {
    this.context.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh);
  },
  cancelAnimation: function cancelAnimation() {
    window.cancelAnimationFrame(this.requestId);
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