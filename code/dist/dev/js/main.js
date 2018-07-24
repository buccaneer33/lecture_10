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

/*import CalcFactory  from './calc_factory/calc_factory.js';*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calc_class = __webpack_require__(/*! ./сalc_factory/calc_class.js */ "./src/js/calculator/сalc_factory/calc_class.js");

var _calc_class2 = _interopRequireDefault(_calc_class);

var _ch_theme = __webpack_require__(/*! ./view/ch_theme.js */ "./src/js/calculator/view/ch_theme.js");

var _ch_theme2 = _interopRequireDefault(_ch_theme);

var _ch_mode = __webpack_require__(/*! ./view/ch_mode.js */ "./src/js/calculator/view/ch_mode.js");

var _ch_mode2 = _interopRequireDefault(_ch_mode);

var _switch_calc_history = __webpack_require__(/*! ./view/switch_calc_history.js */ "./src/js/calculator/view/switch_calc_history.js");

var _switch_calc_history2 = _interopRequireDefault(_switch_calc_history);

var _show_history = __webpack_require__(/*! ./helpers/show_history.js */ "./src/js/calculator/helpers/show_history.js");

var _show_history2 = _interopRequireDefault(_show_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalcInit(container) {

  _calc_class2.default.makeIngenering(container);
  new _ch_theme2.default(container);
  new _ch_mode2.default(container);
  new _switch_calc_history2.default(container);
  new _show_history2.default(container);
};
exports.default = CalcInit;

/***/ }),

/***/ "./src/js/calculator/helpers/additional_keys.js":
/*!******************************************************!*\
  !*** ./src/js/calculator/helpers/additional_keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAdditionalKeys = {
	ingenering: '<button data-ops="ln" class="calculator__ops">ln</button><button data-ops="log" class="calculator__ops">log</button><button data-ops="sin" class="calculator__ops">sin</button><button data-ops="cos" class="calculator__ops">cos</button><button  data-ops="sqrt" class="calculator__ops">&radic;</button><button data-ops="factorial" class="calculator__ops">n!</button><button data-ops="powY" class="calculator__ops">x&#696;</button><button data-ops="root3" class="calculator__ops">&#8731;x</button><button data-ops="pow3" class="calculator__ops">x&#179;</button><button data-ops="powten" class="calculator__ops">10&#739;</button>'
};

module.exports = getAdditionalKeys;

/***/ }),

/***/ "./src/js/calculator/helpers/calc_history.js":
/*!***************************************************!*\
  !*** ./src/js/calculator/helpers/calc_history.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function calcHistory(UpperDisp, container) {
  /*console.log('Функция истории подключена');*/
  var history = document.getElementById(container).getElementsByClassName('history-list')[0];
  var result = '' + UpperDisp.UoldNum + UpperDisp.UcalcOperator + UpperDisp.UcurrNum + UpperDisp.Uproc;
  var getListLi = document.createElement('li');
  getListLi.setAttribute('data-hist', 'histItem');
  getListLi.setAttribute('hist-result', UpperDisp.UresNum);

  getListLi.innerHTML = result;
  history.appendChild(getListLi);
};
module.exports = calcHistory;

/***/ }),

/***/ "./src/js/calculator/helpers/clear_history.js":
/*!****************************************************!*\
  !*** ./src/js/calculator/helpers/clear_history.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clearHistory(container) {
	/*console.log('Функция удаления подключена');*/
	var history = document.getElementById(container).getElementsByClassName('history-list')[0];
	var elem = history.childNodes;
	if (elem) {
		while (history.firstChild) {
			history.removeChild(history.firstChild);
		}
	}
}
module.exports = clearHistory;

/***/ }),

/***/ "./src/js/calculator/helpers/get_operand.js":
/*!**************************************************!*\
  !*** ./src/js/calculator/helpers/get_operand.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getOperandChar = {
	plus: '+',
	minus: '-',
	times: '*',
	divide: '/',
	proc: '%',
	sqrt: '&radic;',
	pow2: '&#178;',
	pow3: '&#179;',
	powten: '&#739;',
	root3: '&#8731;',
	powY: '&#696;',
	rootY: '&#696;&#8730;',
	tan: 'tan',
	fact: '!',
	cos: 'cos',
	log: 'log',
	sin: 'sin',
	ln: 'ln'
};

module.exports = getOperandChar;

/***/ }),

/***/ "./src/js/calculator/helpers/show_history.js":
/*!***************************************************!*\
  !*** ./src/js/calculator/helpers/show_history.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var showHistoryItem = function showHistoryItem(container, result, inner) {
	var upperDisp = document.getElementById(container).getElementsByClassName('calculator__display-upper')[0];
	var disp = document.getElementById(container).getElementsByClassName('calculator__display')[0];
	upperDisp.innerHTML = inner;
	disp.innerHTML = result;
};

function showHistory(container) {

	var elem = document.getElementById(container).getElementsByClassName('history-list')[0];
	this.histItem = function () {
		showHistoryItem(container, self.result, self.inner);
	};
	var result;
	var inner;
	var self = this;
	elem.onclick = function (e) {
		var target = e.target;
		var action = target.getAttribute('data-hist');
		result = target.getAttribute('hist-result');
		inner = target.innerHTML;
		self.result = result;
		self.inner = inner;
		if (action) {
			self[action]();
		}
	};
};

exports.default = showHistory;

/***/ }),

/***/ "./src/js/calculator/helpers/utils.js":
/*!********************************************!*\
  !*** ./src/js/calculator/helpers/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};

var sum = function sum(op1, op2, proc) {
  if (proc) {
    var res = op1 + op1 / 100 * op2;
  } else {
    var res = op1 + op2;
  }
  return res;
};
/**********/
var minus = function minus(op1, op2, proc) {
  if (proc) {
    var res = op1 - op1 / 100 * op2;
  } else {
    var res = op1 - op2;
  }
  return res;
};
/**********/
var times = function times(op1, op2, proc) {
  if (proc) {
    var res = op1 * (op1 / 100 * op2);
  } else {
    var res = op1 * op2;
  }
  return res;
};
/**********/
var divide = function divide(op1, op2, proc) {
  if (proc) {
    var res = op1 / (op1 / 100 * op2);
  } else {
    var res = op1 / op2;
  }
  return res;
};
/**********/
var sqrt = function sqrt(op1) {
  var res = Math.sqrt(op1);return res;
};
/**********/
var pow2 = function pow2(op1) {
  var res = Math.pow(op1, 2);return res;
};
/**********/
var powten = function powten(op1) {
  var res = Math.pow(10, op1);return res;
};
/**********/
var pow3 = function pow3(op1) {
  var res = Math.pow(op1, 3);return res;
};
/**********/
var root3 = function root3(op1) {
  var res = Math.cbrt(op1);return res;
};
/**********/
var powY = function powY(op1, op2) {
  var res = Math.pow(op1, op2);return res;
};
/**********/
var factorial = function factorial(op1) {

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
/**********/
var tan = function tan(op1) {
  var res = Math.tan(op1);return res;
};
/***********/
var opReverse = function opReverse(op1) {
  console.log('reverse1');
  var op = Math.sign(op1);
  switch (op) {
    case 1:
      var res = parseFloat("-" + op1);return res;break;
    case -1:
      var res = Math.abs(op1);return res;;break;
    case 0:
      var res = 0;return res;break;
    case -0:
      var res = 0;return res;break;
    default:
      return op1;

  }
};
/**********/
var cos = function cos(op1) {
  var res = Math.cos(op1);return res;
};
/**********/
var sin = function sin(op1) {
  var res = Math.sin(op1);return res;
};
/**********/
var ln = function ln(op1) {
  var res = Math.log(op1);return res;
};
/**********/
var log = function log(op1) {
  var res = Math.log10(op1);return res;
};
/**********/

module.exports = { sum: sum, minus: minus, times: times, divide: divide, sqrt: sqrt, pow2: pow2, powten: powten, pow3: pow3, root3: root3, powY: powY, factorial: factorial, tan: tan, cos: cos, sin: sin, log: log, ln: ln, opReverse: opReverse };

/***/ }),

/***/ "./src/js/calculator/view/ch_mode.js":
/*!*******************************************!*\
  !*** ./src/js/calculator/view/ch_mode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _calc_class = __webpack_require__(/*! ../сalc_factory/calc_class.js */ "./src/js/calculator/сalc_factory/calc_class.js");

var _calc_class2 = _interopRequireDefault(_calc_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIngPanel = function getIngPanel(container) {
	var getAddKeys = __webpack_require__(/*! ../helpers/additional_keys */ "./src/js/calculator/helpers/additional_keys.js");
	var getIngAddKeys = document.createElement('div');
	getIngAddKeys.classList.add("ingeneer");
	getIngAddKeys.innerHTML = getAddKeys.ingenering;
	var additionalKeysBlock = document.getElementById(container).getElementsByClassName("calculator__additional-keys-block")[0];
	var elem = additionalKeysBlock.querySelector('div');
	if (elem) {
		additionalKeysBlock.removeChild(elem);
	}
	additionalKeysBlock.appendChild(getIngAddKeys);
};

var getSimpleMode = function getSimpleMode(container) {
	var closeIngPanels = function closeIngPanels() {
		var additionalKeysBlock = document.getElementById(container).getElementsByClassName("calculator__additional-keys-block")[0];
		var elem = additionalKeysBlock.querySelector('div');
		if (elem) {
			additionalKeysBlock.removeChild(elem);
		};
	};
	closeIngPanels();
	_calc_class2.default.makeSimple(container);
};

var getEngMode = function getEngMode(container) {
	getIngPanel(container);
	_calc_class2.default.makeIngenering(container);
};

function changeMode(container) {
	var elem = document.getElementById(container).getElementsByClassName('submenu__mode')[0];
	this.eng = function () {
		getEngMode(container);
	};
	this.simple = function () {
		getSimpleMode(container);
	};
	var self = this;
	elem.onclick = function (e) {

		var target = e.target;
		var action = target.getAttribute('data-mode');
		if (action) {
			self[action]();
		}
	};
};
exports.default = changeMode;

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

	var elem = document.getElementById(container).getElementsByClassName('submenu__theme')[0];
	//console.log(elem);
	this.dark = function () {
		getCalcDark(container);
	};
	this.light = function () {
		getCalcLight(container);
	};
	var self = this;
	elem.onclick = function (e) {
		var target = e.target;
		var action = target.getAttribute('data-theme');
		if (action) {
			self[action]();
		}
	};
};

exports.default = changeTheme;

/***/ }),

/***/ "./src/js/calculator/view/switch_calc_history.js":
/*!*******************************************************!*\
  !*** ./src/js/calculator/view/switch_calc_history.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var clearHistory = __webpack_require__(/*! ../helpers/clear_history */ "./src/js/calculator/helpers/clear_history.js");

var closeHistBlock = function closeHistBlock(container) {
	var elem = document.getElementById(container).getElementsByClassName('calculator__display-hist')[0];
	elem.style.height = 0 + "px";
};
var openHistBlock = function openHistBlock(container) {
	var elem = document.getElementById(container).getElementsByClassName('calculator__display-hist')[0];
	elem.style.height = 100 + "px";
};

function switchCalcHistBlock(container) {
	var elem = document.getElementById(container).getElementsByClassName('submenu__hist')[0];
	this.close = function () {
		closeHistBlock(container);
	};
	this.open = function () {
		openHistBlock(container);
	};
	this.clear = function () {
		clearHistory(container);
	};
	var self = this;
	elem.onclick = function (e) {

		var target = e.target;
		var action = target.getAttribute('data-hist');
		if (action) {
			self[action]();
		}
	};
};
exports.default = switchCalcHistBlock;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleCalculator = function () {
  _createClass(SimpleCalculator, [{
    key: "getOperand",
    value: function getOperand(calcOp) {
      var getOperandChar = __webpack_require__(/*! ../helpers/get_operand */ "./src/js/calculator/helpers/get_operand.js");
      var result = void 0;

      switch (calcOp) {
        case "plus":
          result = getOperandChar.plus;break;
        case "minus":
          result = getOperandChar.minus;break;
        case "times":
          result = getOperandChar.times;break;
        case "divide":
          result = getOperandChar.divide;break;
        case "pow2":
          result = getOperandChar.pow2;break;
        default:
          result = '&nbsp';
      }
      return result;
    }
  }, {
    key: "getCalculate",
    value: function getCalculate(calcOper, oldNum, currNum, proc) {
      var utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/calculator/helpers/utils.js");
      var result = void 0;

      switch (calcOper) {
        case "plus":
          result = utils.sum(oldNum, currNum, proc);break;
        case "minus":
          result = utils.minus(oldNum, currNum, proc);break;
        case "times":
          result = utils.times(oldNum, currNum, proc);break;
        case "divide":
          result = utils.divide(oldNum, currNum, proc);break;
        case "pow2":
          result = utils.pow2(oldNum);break;
        /* если = был нажат без оператора, сохраняем число и гоним дальше */
        default:
          result = currNum;
      };
      return result;
    }
  }]);

  function SimpleCalculator(containerId) {
    _classCallCheck(this, SimpleCalculator);

    /*подключаем историю*/
    var calcHistory = __webpack_require__(/*! ../helpers/calc_history */ "./src/js/calculator/helpers/calc_history.js");
    var getOperandChar = __webpack_require__(/*! ../helpers/get_operand */ "./src/js/calculator/helpers/get_operand.js");
    var utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/calculator/helpers/utils.js");

    /*объявляем переменные*/
    var opChar;
    var self = this;
    this.container = containerId;
    self.calcBlock;
    self.opChar;
    self.resNum;
    self.oldnum;
    self.currNum;
    self.proc;
    self.calcBlock = document.getElementById(self.container); /* находим контейнер в котором будем запускать */

    var display = self.calcBlock.getElementsByClassName('calculator__display')[0],
        /* дисплей калькулятора */
    displayUpper = self.calcBlock.getElementsByClassName('calculator__display-upper')[0],
        /* верхний дисплей */
    result = self.calcBlock.getElementsByClassName("calculator__result")[0],
        /* кнопка равно */
    clear = self.calcBlock.getElementsByClassName("calculator__clear")[0],
        /* кнопка C */
    calculatorNum = self.calcBlock.getElementsByClassName("calculator__num"),
        /* кнопки чисел */
    calculatorOps = self.calcBlock.getElementsByClassName("calculator__ops"),
        /* кнопки операторов */
    resNum,
        /* Для сохранения результата */
    oldNum = "",
        /* сюда кладем первый операнд */
    currNum = "",
        /* сюда последующий операнд */
    calcOperator,
        /* какой оператор будем использовать */
    proc = false; /* будем ли использовать проценты */

    var showResToUpperDisp = function showResToUpperDisp() {
      displayUpper.innerHTML = "" + self.UpperDisp.UoldNum + self.UpperDisp.UcalcOperator + self.UpperDisp.UcurrNum + self.UpperDisp.Uproc;
    };
    var clearUpperDisp = function clearUpperDisp() {
      self.UpperDisp = { UoldNum: "", UcurrNum: "", UcalcOperator: "", Uproc: "", UresNum: "" };
    };

    /* Создаем объект с переменными2 */
    self.UpperDisp = {
      UoldNum: "",
      UcurrNum: "",
      UcalcOperator: "",
      Uproc: "",
      UresNum: ""
    };

    /*собственно логика*/

    /* если: клик по числу */
    var setNum = function setNum() {
      if (resNum) {
        /* number если на дисплее отражен результат */
        currNum = this.getAttribute("data-num"); /* заносим в переменную */
        resNum = "";
      } else {
        /* если нет, добавляем число в  предыдущий операнд */
        currNum += this.getAttribute("data-num");
      }

      display.innerHTML = currNum; /* Отобразить второй операнд */
      self.UpperDisp.UcurrNum = currNum;
    };

    /* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
    var moveNum = function moveNum() {

      if (this.getAttribute("data-ops") !== 'proc' && this.getAttribute("data-ops") !== 'opReverse') {

        if (oldNum == "") {
          oldNum = currNum;
          currNum = "";
          self.UpperDisp.UoldNum = oldNum;
          self.UpperDisp.UcurrNum = "";
          self.operator = this.getAttribute("data-ops");
          calcOperator = self.operator;
          self.UpperDisp.UcalcOperator = self.operator;
          showResToUpperDisp();
        } else {
          currNum = currNum;
          self.UpperDisp.UcurrNum = currNum;
          showResToUpperDisp();
        }
      } else if (this.getAttribute("data-ops") == 'opReverse' && this.getAttribute("data-ops") != 'proc') {
        currNum = utils.opReverse(currNum);
        self.UpperDisp.UcurrNum = currNum;
        showResToUpperDisp();
      } else if (this.getAttribute("data-ops") == 'proc') {
        proc = true;
        self.UpperDisp.UcurrNum = currNum;
      }

      /* console.log("First= " + oldNum + "; opper= " + calcOperator + "; Second= " + currNum + "; proc= " + proc);*/

      self.opChar = self.getOperand(calcOperator);

      /*если процент не был нажат*/
      if (!proc) {
        self.UpperDisp.UcalcOperator = self.opChar;
        showResToUpperDisp();
      } else {
        /*если был то вычисляем с процентами*/
        self.UpperDisp.UoldNum = oldNum;
        self.UpperDisp.UcalcOperator = self.opChar;
        self.UpperDisp.UcurrNum = currNum;
        self.UpperDisp.Uproc = getOperandChar.proc;
        showResToUpperDisp();
      };
      result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
    };

    /* если: клик был по =. вычисляем результат */
    var displayNum = function displayNum() {
      self.UpperDisp.UcurrNum = currNum;

      /* выполняем преобразование в числа с плавающей точкой */
      oldNum = parseFloat(oldNum);
      currNum = parseFloat(currNum);

      /* выполняем операцию */
      self.resNum = self.getCalculate(calcOperator, oldNum, currNum, proc);
      resNum = self.resNum;
      self.UpperDisp.UresNum = self.resNum;
      showResToUpperDisp();

      /* если результат вычислений вернул NaN или бесконечность */
      if (!isFinite(resNum)) {
        if (isNaN(resNum)) {
          /* если результат NaN */
          resNum = "Wrong result";
        } else {
          /* если в результате деления на ноль результат бесконечность */
          resNum = "Divide by ZERO!!!!";
          calcBlock.classList.add("broken"); /* ломаем калькулятор */
        }
      }
      /* если результат получен и он не NaN и не бесконечность показываем результат */
      display.innerHTML = resNum;
      self.UpperDisp.UresNum = self.resNum;
      /* console.log(`${self.UpperDisp.UoldNum}${self.UpperDisp.UcalcOperator}${self.UpperDisp.UcurrNum}${self.UpperDisp.Uproc}=${self.UpperDisp.UresNum}`);*/
      calcHistory(self.UpperDisp, containerId);
      result.setAttribute("data-result", resNum);

      /* и обнуление переменных */
      oldNum = "";
      proc = false;
      currNum = resNum;
      showResToUpperDisp();
      clearUpperDisp();
    };
    /* клик по кнопке С. обнуляем все. */
    var clearAll = function clearAll() {
      oldNum = "";
      currNum = "";
      display.innerHTML = "0";
      result.setAttribute("data-result", resNum);
      proc = false;
      self.operator = "&nbsp";
      calcOperator = "&nbsp";
      self.UpperDisp = {
        UoldNum: "",
        UcurrNum: "",
        UcalcOperator: "&nbsp",
        Uproc: "",
        UresNum: ""
      };
      clearUpperDisp();
      showResToUpperDisp();
    };

    /* эвент на клик числа */
    for (var i = 0, l = calculatorNum.length; i < l; i++) {
      calculatorNum[i].onclick = setNum;
    }
    /* эвент на клик оператора */
    for (var _i = 0, _l = calculatorOps.length; _i < _l; _i++) {
      calculatorOps[_i].onclick = moveNum;
    }
    /* эвент на клик равно */
    result.onclick = displayNum;

    /**/

    /* клик на С */
    clear.onclick = clearAll;

    /*конец логики*/
  }

  return SimpleCalculator;
}();

;

var IngCalculator = function (_SimpleCalculator) {
  _inherits(IngCalculator, _SimpleCalculator);

  function IngCalculator() {
    _classCallCheck(this, IngCalculator);

    return _possibleConstructorReturn(this, (IngCalculator.__proto__ || Object.getPrototypeOf(IngCalculator)).apply(this, arguments));
  }

  _createClass(IngCalculator, [{
    key: "getOperand",
    value: function getOperand(calcOp) {
      var getOperandChar = __webpack_require__(/*! ../helpers/get_operand */ "./src/js/calculator/helpers/get_operand.js");
      var result = void 0;

      switch (calcOp) {
        case "plus":
          result = getOperandChar.plus;break;case "minus":
          result = getOperandChar.minus;break;
        case "times":
          result = getOperandChar.times;break;case "divide":
          result = getOperandChar.divide;break;
        case "opReverse":
          result = getOperandChar.sqrt;break;case "pow2":
          result = getOperandChar.pow2;break;
        case "powten":
          result = getOperandChar.powten;break;case "pow3":
          result = getOperandChar.pow3;break;
        case "root3":
          result = getOperandChar.root3;break;case "powY":
          result = getOperandChar.powY;break;
        case "factorial":
          result = getOperandChar.fact;break;case "sqrt":
          result = getOperandChar.sqrt;break;
        case "cos":
          result = getOperandChar.cos;break;case "sin":
          result = getOperandChar.sin;break;
        case "log":
          result = getOperandChar.log;break;case "ln":
          result = getOperandChar.ln;break;
      }
      return result;
    }
  }, {
    key: "getCalculate",
    value: function getCalculate(calcOper, oldNum, currNum, proc) {
      var utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/calculator/helpers/utils.js");
      var result = void 0;

      switch (calcOper) {
        case "plus":
          result = utils.sum(oldNum, currNum, proc);break;case "minus":
          result = utils.minus(oldNum, currNum, proc);break;
        case "times":
          result = utils.times(oldNum, currNum, proc);break;case "divide":
          result = utils.divide(oldNum, currNum, proc);break;
        case "opReverse":
          result = utils.sqrt(oldNum);break;case "pow2":
          result = utils.pow2(oldNum);break;
        case "powten":
          result = utils.powten(oldNum);break;case "pow3":
          result = utils.pow3(oldNum);break;
        case "root3":
          result = utils.root3(oldNum);break;case "powY":
          result = utils.powY(oldNum, currNum);break;
        case "factorial":
          result = utils.factorial(oldNum);break;case "sqrt":
          result = utils.sqrt(oldNum);break;
        case "cos":
          result = utils.cos(oldNum);break;case "sin":
          result = utils.sin(oldNum);break;
        case "log":
          result = utils.log(oldNum);break;case "ln":
          result = utils.ln(oldNum);break;

        default:
          result = currNum;
      };
      return result;
    }
  }]);

  return IngCalculator;
}(SimpleCalculator);

;

function CalcFactory() {};
CalcFactory.prototype = {

  makeSimple: function makeSimple(container) {
    return new SimpleCalculator(container);
  },
  makeIngenering: function makeIngenering(container) {
    return new IngCalculator(container);
  },
  constructor: CalcFactory
};
var CalcFactory = new CalcFactory();

exports.default = CalcFactory;

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

var _calculator = __webpack_require__(/*! ./calculator/calculator.js */ "./src/js/calculator/calculator.js");

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _calculator2.default)('calculator1');
(0, _calculator2.default)('calculator2');

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