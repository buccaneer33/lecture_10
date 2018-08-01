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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Calculator.png":
/*!********************************!*\
  !*** ./src/img/Calculator.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/Calculator.png";

/***/ }),

/***/ "./src/js/calculator/calculator.js":
/*!*****************************************!*\
  !*** ./src/js/calculator/calculator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calc_class = __webpack_require__(/*! ./сalc_factory/calc_class.js */ "./src/js/calculator/сalc_factory/calc_class.js");

var _calc_class2 = _interopRequireDefault(_calc_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_calc_class2.default.makeSimple('calculator1');
_calc_class2.default.makeSimple('calculator2');

/***/ }),

/***/ "./src/js/calculator/helpers/additional_keys.js":
/*!******************************************************!*\
  !*** ./src/js/calculator/helpers/additional_keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getAdditionalKeys(mode) {
  var result = void 0;
  switch (mode) {
    case "simple":
      result = "";break;
    case "ing":
      result = '<button data-ops="ln" class="calculator__ops">ln</button><button data-ops="log" class="calculator__ops">log</button><button data-ops="sin" class="calculator__ops">sin</button><button data-ops="cos" class="calculator__ops">cos</button><button  data-ops="sqrt" class="calculator__ops">&radic;</button><button data-ops="factorial" class="calculator__ops">n!</button><button data-ops="powY" class="calculator__ops">x&#696;</button><button data-ops="root3" class="calculator__ops">&#8731;x</button><button data-ops="pow3" class="calculator__ops">x&#179;</button><button data-ops="powten" class="calculator__ops">10&#739;</button>';break;
    default:
      result = '&nbsp';
  }
  return result;
};

exports.default = getAdditionalKeys;

/***/ }),

/***/ "./src/js/calculator/helpers/get_calculate.js":
/*!****************************************************!*\
  !*** ./src/js/calculator/helpers/get_calculate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cache = {};
function getCalculate(op1, op2, operator, proc) {
  var res = void 0;
  console.log(operator);
  if (operator) {
    switch (operator) {
      case "plus":
        if (proc) {
          res = op1 + op1 / 100 * op2;
        } else {
          res = op1 + op2;
        }return res;console.log(res);
      case "minus":
        if (proc) {
          res = op1 - op1 / 100 * op2;
        } else {
          res = op1 - op2;
        }return res;
      case "times":
        if (proc) {
          res = op1 * (op1 / 100 * op2);
        } else {
          res = op1 * op2;
        }return res;
      case "divide":
        if (proc) {
          res = op1 / (op1 / 100 * op2);
        } else {
          res = op1 / op2;
        }return res;
      case "sqrt":
        res = Math.sqrt(op1);return res;
      case "pow2":
        res = Math.pow(op1, 2);return res;
      case "powten":
        res = Math.pow(10, op1);return res;
      case "pow3":
        res = Math.pow(op1, 3);return res;
      case "root3":
        res = Math.cbrt(op1);return res;
      case "powY":
        res = Math.cbrt(op1);return res;
      case "tan":
        res = Math.tan(op1);return res;
      case "log":
        res = Math.log10(op1);return res;
      case "ln":
        res = Math.log(op1);return res;
      case "sin":
        res = Math.sin(op1);return res;
      case "cos":
        res = Math.cos(op1);return res;
      case "opReverse":
        res = opReverse(op1);return res;
      case "factorial":
        res = factorial(op1);return res;
      default:
        res = 0;
    }
    return res;
  }
};
function factorial(op1) {
  var Memoize = function Memoize(fn) {
    return function () {
      var n = arguments.length <= 0 ? undefined : arguments[0];
      if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n];
      } else {
        console.log('Calculating result', n);
        var result = fn(n);
        cache[n] = result;
        return result;
      }
    };
  };
  var GetFactorial = Memoize(function (x) {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  });
  var res = GetFactorial(op1);
  return res;
};
function opReverse(op1) {
  console.log('reverse1');
  var res = void 0;
  var op = Math.sign(op1);
  switch (op) {
    case 1:
      res = parseFloat("-" + op1);return res;break;
    case -1:
      res = Math.abs(op1);return res;;break;
    case 0:
      res = 0;return res;break;
    case -0:
      res = 0;return res;break;
    default:
      return op1;
  }
};
exports.default = getCalculate;

/***/ }),

/***/ "./src/js/calculator/helpers/get_operand.js":
/*!**************************************************!*\
  !*** ./src/js/calculator/helpers/get_operand.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getOperandChar(operator) {
	var result = void 0;
	if (operator) {
		switch (operator) {

			case "plus":
				result = "+";break;
			case "minus":
				result = "-";break;
			case "times":
				result = "*";break;
			case "divide":
				result = "/";break;
			case "proc":
				result = "%";break;
			case "sqrt":
				result = "&radic;";break;
			case "pow2":
				result = "&#178;";break;
			case "pow3":
				result = "&#179;";break;
			case "powten":
				result = "&#739;";break;
			case "root3":
				result = "&#8731;";break;
			case "powY":
				result = "&#696;";break;
			case "rootY":
				result = "&#696;&#8730;";break;
			case "tan":
				result = "tan";break;
			case "fact":
				result = "!";break;
			case "cos":
				result = "cos";break;
			case "log":
				result = "log";break;
			case "sin":
				result = "sin";break;
			case "ln":
				result = "ln";break;

			default:
				result = '&nbsp';
		}
		return result;
	}
};

exports.default = getOperandChar;

/***/ }),

/***/ "./src/js/calculator/view/ch_theme.js":
/*!********************************************!*\
  !*** ./src/js/calculator/view/ch_theme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getCalcLight = function getCalcLight(container) {
	document.getElementById(container).classList.add("calculator--theme-light");
};
var getCalcDark = function getCalcDark(container) {
	document.getElementById(container).classList.remove("calculator--theme-light");
};

function changeTheme(container) {

	var elem = document.getElementById(container).getElementsByClassName('submenu__theme');
	var click = void 0;

	var _loop = function _loop(i) {
		var radio = elem[i];
		radio.addEventListener('click', function () {
			click = radio.getAttribute('data-theme');
			if (click == 'dark') {
				getCalcDark(container);
			} else if (click == 'light') {
				getCalcLight(container);
			}
		});
	};

	for (var i = 0; i < elem.length; i++) {
		_loop(i);
	}
};

exports.default = changeTheme;

/***/ }),

/***/ "./src/js/calculator/сalc_factory/calc_class.js":
/*!******************************************************!*\
  !*** ./src/js/calculator/сalc_factory/calc_class.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var _simple_calc = __webpack_require__(/*! ./classes/simple_calc.js */ "./src/js/calculator/сalc_factory/classes/simple_calc.js");

var _simple_calc2 = _interopRequireDefault(_simple_calc);

var _ing_cal = __webpack_require__(/*! ./classes/ing_calс.js */ "./src/js/calculator/сalc_factory/classes/ing_calс.js");

var _ing_cal2 = _interopRequireDefault(_ing_cal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalcFactory() {};
CalcFactory.prototype = {

     makeSimple: function makeSimple(container) {
          return new _simple_calc2.default(container);
     },
     makeIngenering: function makeIngenering(container) {
          return new _ing_cal2.default(container);
     },
     constructor: CalcFactory
};
var CalcFactory = new CalcFactory();

exports.default = CalcFactory;

/***/ }),

/***/ "./src/js/calculator/сalc_factory/classes/calc_log/calc_log.js":
/*!*********************************************************************!*\
  !*** ./src/js/calculator/сalc_factory/classes/calc_log/calc_log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'use stric';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalcLog = function () {
    function CalcLog(container) {
        _classCallCheck(this, CalcLog);

        this.calcLog = container.querySelector('.calculator__display-hist');
        this.calcLogList = container.querySelector('.history-list');
        this.cond = 'closed';
    }

    _createClass(CalcLog, [{
        key: 'openCalcLog',
        value: function openCalcLog() {
            if (this.cond === 'closed') {
                this.calcLog.style.height = 100 + "px";
                this.cond = 'opened';
            } else {
                this.calcLog.style.height = 0 + "px";
                this.cond = 'closed';
            };
        }
    }, {
        key: 'clearCalcLog',
        value: function clearCalcLog() {
            var elem = this.calcLogList.childNodes;
            if (elem) {
                while (calcLogList.firstChild) {
                    calcLogList.removeChild(calcLogList.firstChild);
                }
            }
        }
    }], [{
        key: 'pushToCalcLog',
        value: function pushToCalcLog(container, oldNum, currNum, operand, result) {

            var elem = document.createElement('li');
            elem.innerHTML = '' + oldNum + operand + currNum;

            this.calcLogList.appendChild(elem);
        }
    }]);

    return CalcLog;
}();

;

exports.default = CalcLog;

/***/ }),

/***/ "./src/js/calculator/сalc_factory/classes/ing_calс.js":
/*!************************************************************!*\
  !*** ./src/js/calculator/сalc_factory/classes/ing_calс.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simple_calc = __webpack_require__(/*! ./simple_calc.js */ "./src/js/calculator/сalc_factory/classes/simple_calc.js");

var _simple_calc2 = _interopRequireDefault(_simple_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IngCalculator = function (_SimpleCalculator) {
  _inherits(IngCalculator, _SimpleCalculator);

  function IngCalculator() {
    _classCallCheck(this, IngCalculator);

    return _possibleConstructorReturn(this, (IngCalculator.__proto__ || Object.getPrototypeOf(IngCalculator)).apply(this, arguments));
  }

  return IngCalculator;
}(_simple_calc2.default);

;
exports.default = IngCalculator;

/***/ }),

/***/ "./src/js/calculator/сalc_factory/classes/nav/nav.js":
/*!***********************************************************!*\
  !*** ./src/js/calculator/сalc_factory/classes/nav/nav.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*import getAdditionalKeys from '../../helpers/additional_keys';*/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
    function Navigation(container) {
        _classCallCheck(this, Navigation);

        this.themeSwitch = container.querySelector('.submenu__theme');
        this.modeSwitch = container.querySelector('.submenu__mode');
        this.histSwitch = container.querySelector('.submenu__hist');
        this.histClear = container.querySelector('.history__clear');
        this.calAddKeys = container.querySelector('.calculator__additional-keys-block');
        this.mode = 'simple';
        this.theme = 'dark';
    }

    _createClass(Navigation, [{
        key: 'changeMode',
        value: function changeMode(container) {

            if (this.mode == 'simple') {
                container = getAdditionalKeys(this.mode);
                this.mode = 'ing';
                //вызвать калькулятор в инженерном моде
            } else {

                this.calAddKeys.innerHTML = getAdditionalKeys(this.mode);
                this.mode = 'simple';
                //вызвать калькулятор в простом моде
            };
        }
    }, {
        key: 'changeTheme',
        value: function changeTheme(container) {

            if (this.theme == 'dark') {
                container.classList.add('calculator--theme-light');
                this.theme = 'light';
            } else {
                container.classList.remove('calculator--theme-light');
                this.theme = 'dark';
            };
        }
    }]);

    return Navigation;
}();

;

exports.default = Navigation;

/***/ }),

/***/ "./src/js/calculator/сalc_factory/classes/simple_calc.js":
/*!***************************************************************!*\
  !*** ./src/js/calculator/сalc_factory/classes/simple_calc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//import Display from './display/display';


var _nav = __webpack_require__(/*! ./nav/nav */ "./src/js/calculator/сalc_factory/classes/nav/nav.js");

var _nav2 = _interopRequireDefault(_nav);

var _calc_log = __webpack_require__(/*! ./calc_log/calc_log */ "./src/js/calculator/сalc_factory/classes/calc_log/calc_log.js");

var _calc_log2 = _interopRequireDefault(_calc_log);

var _get_operand = __webpack_require__(/*! ../../helpers/get_operand */ "./src/js/calculator/helpers/get_operand.js");

var _get_operand2 = _interopRequireDefault(_get_operand);

var _get_calculate = __webpack_require__(/*! ../../helpers/get_calculate */ "./src/js/calculator/helpers/get_calculate.js");

var _get_calculate2 = _interopRequireDefault(_get_calculate);

var _additional_keys = __webpack_require__(/*! ../../helpers/additional_keys */ "./src/js/calculator/helpers/additional_keys.js");

var _additional_keys2 = _interopRequireDefault(_additional_keys);

var _ch_theme = __webpack_require__(/*! ../../view/ch_theme */ "./src/js/calculator/view/ch_theme.js");

var _ch_theme2 = _interopRequireDefault(_ch_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleCalculator = function () {
  function SimpleCalculator(container) {
    var _this = this;

    _classCallCheck(this, SimpleCalculator);

    /*объявляем переменные*/

    this.container = document.querySelector('#' + container); /* находим контейнер в котором будем запускать */
    this.calculatorNum = this.container.getElementsByClassName("calculator__num"); /* кнопки чисел */
    this.calculatorOps = this.container.getElementsByClassName("calculator__ops"); /* кнопки операторов */
    this.changeMode = this.container.querySelector('.submenu__mode');
    this.calcLog = this.container.querySelector('.submenu__hist');
    this.clearCalcLog = this.container.querySelector('.history__clear');
    this.result = this.container.querySelector('.calculator__result'); /* кнопка равно */
    this.clear = this.container.querySelector('.calculator__clear'); /* кнопка C */
    this.displayUpper = this.container.querySelector('.calculator__display-upper'); /* верхний дисплей */
    this.display = this.container.querySelector('.calculator__display'); /* дисплей калькулятора */

    this.buffNum;
    this.buffOp;

    var result = this.result;
    var displayUpper = this.displayUpper;
    var display = this.display;

    this.showResToUpperDisp = function () {
      displayUpper.innerHTML = '' + data.oldNum + data.opChar + data.currNum + data.proc;
    };
    this.clearUpperDisp = function () {
      data = { oldNum: "", currNum: "", calcOp: "", opChar: "", proc: "", resNum: "" };
    };

    /* Создаем объект с переменными2 */
    this.data = {
      oldNum: "", /* сюда кладем первый операнд */
      currNum: "", /* сюда последующий операнд */
      calcOp: "", /* какой оператор будем использовать */
      opChar: "", /* символ операнда */
      proc: "", /* будем ли использовать проценты */
      resNum: "" /* Для сохранения результата */
    };
    var data = this.data;

    //this.getAddKeys('simple');

    (0, _ch_theme2.default)(container);
    /* эвент на клик числа */

    var _loop = function _loop(i) {
      var button = _this.calculatorNum[i];
      button.addEventListener('click', function () {
        _this.buffNum = button.getAttribute('data-num');_this.setNum(_this);
      });
    };

    for (var i = 0; i < this.calculatorNum.length; i++) {
      _loop(i);
    }
    /* эвент на клик оператора */

    var _loop2 = function _loop2(i) {
      var button = _this.calculatorOps[i];
      button.addEventListener('click', function () {
        _this.buffOp = button.getAttribute('data-ops');_this.moveNum(_this);
      });
    };

    for (var i = 0; i < this.calculatorOps.length; i++) {
      _loop2(i);
    }
    /* эвент на клик равно */
    this.result.addEventListener('click', this.displayNum.bind(this));

    /* клик на С */
    this.clear.addEventListener('click', this.clearAll.bind(this));
    /*конец логики*/
  }

  _createClass(SimpleCalculator, [{
    key: 'clearAll',
    value: function clearAll() {
      /* клик по кнопке С. обнуляем все. */
      var data = this.data;
      this.display.innerHTML = "0";
      this.result.setAttribute("data-result", data.resNum);
      this.data = {
        oldNum: "",
        currNum: "",
        calcOp: "",
        opChar: "",
        proc: false,
        resNum: ""
      };
      this.clearUpperDisp();
      this.showResToUpperDisp();
    }
  }, {
    key: 'setNum',
    value: function setNum() {
      var data = this.data;
      if (data.resNum) {
        /* number если на дисплее отражен результат */
        data.currNum = this.buffNum; /* заносим в переменную */
        data.resNum = "";
      } else {
        /* если нет, добавляем число в  предыдущий операнд */
        data.currNum += this.buffNum;
      }
      this.display.innerHTML = data.currNum; /* Отобразить второй операнд */
    }
  }, {
    key: 'moveNum',
    value: function moveNum() {
      var data = this.data;
      if (this.buffOp !== 'proc' && this.buffOp !== 'opReverse') {

        if (data.oldNum == "") {
          data.oldNum = data.currNum;
          data.currNum = "";
          data.calcOp = this.buffOp;
          this.showResToUpperDisp();
        } else {
          data.currNum = data.currNum;
          this.showResToUpperDisp();
        }
      } else if (this.buffOp == 'opReverse' && this.buffOp != 'proc') {
        data.currNum = (0, _get_calculate2.default)(data.currNum, 'opReverse');
        this.showResToUpperDisp();
      } else if (this.buffOp == 'proc') {
        data.proc = true;
        data.currNum = data.currNum;
      }

      data.opChar = (0, _get_operand2.default)(data.calcOp);
      console.log("First= " + data.oldNum + "; opper= " + data.calcOp + "; Second= " + data.currNum + "; opChar= " + data.opChar + "; proc= " + data.proc);

      /*если процент не был нажат*/
      if (!data.proc) {
        this.showResToUpperDisp();
      } else {
        /*если был то вычисляем с процентами*/
        data.proc = (0, _get_operand2.default)('proc');
        this.showResToUpperDisp();
      };
      this.result.setAttribute("data-result", "");
    }
  }, {
    key: 'displayNum',
    value: function displayNum() {
      this.calcLog = new _calc_log2.default(this.container);
      var data = this.data;
      /* выполняем преобразование в числа с плавающей точкой */
      data.oldNum = parseFloat(data.oldNum);
      data.currNum = parseFloat(data.currNum);

      /* выполняем операцию */
      data.resNum = (0, _get_calculate2.default)(data.oldNum, data.currNum, data.calcOp, data.proc);
      this.showResToUpperDisp();

      /* если результат вычислений вернул NaN или бесконечность */
      if (!isFinite(data.resNum)) {
        if (isNaN(data.resNum)) {
          /* если результат NaN */
          data.resNum = "Wrong result";
        } else {
          /* если в результате деления на ноль результат бесконечность */
          data.resNum = "Divide by ZERO!!!!";
          calcBlock.classList.add("broken"); /* ломаем калькулятор */
        }
      }
      /* если результат получен и он не NaN и не бесконечность показываем результат */
      this.display.innerHTML = data.resNum;

      var pushToLog = this.calcLog;

      this.calcLog.pushToCalcLog(this.container, data.oldNum, data.currNum, data.opChar, data.resNum);

      this.result.setAttribute("data-result", data.resNum);

      /* и обнуление переменных */
      this.showResToUpperDisp();
      this.clearUpperDisp();
    }
  }, {
    key: 'getAddKeys',
    value: function getAddKeys(mode) {
      var getAddKeys = (0, _additional_keys2.default)(mode);

      var getIngAddKeys = document.createElement('div');
      getIngAddKeys.classList.add(mode);
      getIngAddKeys.innerHTML = getAddKeys;
      var additionalKeysBlock = document.getElementById(container).querySelector(".calculator__additional-keys-block");
      var elem = additionalKeysBlock.querySelector('div');
      if (elem) {
        additionalKeysBlock.removeChild(elem);
      }
      additionalKeysBlock.appendChild(getIngAddKeys);
    }
  }]);

  return SimpleCalculator;
}();

;
exports.default = SimpleCalculator;

/***/ }),

/***/ "./src/js/img.js":
/*!***********************!*\
  !*** ./src/js/img.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../img/Calculator.png */ "./src/img/Calculator.png");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./img.js */ "./src/js/img.js");

__webpack_require__(/*! ./calculator/calculator.js */ "./src/js/calculator/calculator.js");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/index.scss */"./src/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map