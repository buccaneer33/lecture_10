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

/***/ "./src/js/calculator/CalcFactory/calcFactory.js":
/*!******************************************************!*\
  !*** ./src/js/calculator/CalcFactory/calcFactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Calculator = {
	Simple: function Simple(containerId) {

		var opChar;
		var self = this;
		this.container = containerId;
		self.calcBlock;
		self.opChar;
		self.resNum;
		self.oldnum;
		self.currNum;
		self.proc;

		var utils = __webpack_require__(/*! ../helpers/utils */ "./src/js/calculator/helpers/utils.js");
		var calcHistory = __webpack_require__(/*! ../helpers/calcHistory */ "./src/js/calculator/helpers/calcHistory.js");
		var getOperandChar = __webpack_require__(/*! ../helpers/getOperand */ "./src/js/calculator/helpers/getOperand.js");

		self.getOperand = function (calcOp) {
			switch (calcOp) {
				case "plus":
					opChar = getOperandChar.plus;break;
				case "minus":
					opChar = getOperandChar.minus;break;
				case "times":
					opChar = getOperandChar.times;break;
				case "divide":
					opChar = getOperandChar.divide;break;
				case "sqrt":
					opChar = getOperandChar.sqrt;break;
				case "pow2":
					opChar = getOperandChar.pow2;break;
				default:
					opChar = '&nbsp';
			}
			return opChar;
		}.bind(this);

		self.getCalculate = function (calcOper, oldNum, currNum, proc) {
			switch (calcOper) {
				case "plus":
					resNum = utils.sum(oldNum, currNum, proc);break;
				case "minus":
					resNum = utils.minus(oldNum, currNum, proc);break;
				case "times":
					resNum = utils.times(oldNum, currNum, proc);break;
				case "divide":
					resNum = utils.divide(oldNum, currNum, proc);break;
				case "sqrt":
					resNum = utils.sqrt(oldNum);break;
				case "pow2":
					resNum = utils.pow2(oldNum);break;
				/* если = был нажат без оператора, сохраняем число и гоним дальше */
				default:
					resNum = currNum;
			};
			return resNum;
		}.bind(this);

		var showResToUpperDisp = function showResToUpperDisp() {
			displayUpper.innerHTML = '' + self.UpperDisp.UoldNum + self.UpperDisp.UcalcOperator + self.UpperDisp.UcurrNum + self.UpperDisp.Uproc;
		};
		var clearUpperDisp = function clearUpperDisp() {
			self.UpperDisp = { UoldNum: "", UcurrNum: "", UcalcOperator: "", Uproc: "", UresNum: "" };
		};

		/* Создаем переменные */
		self.UpperDisp = {
			UoldNum: "",
			UcurrNum: "",
			UcalcOperator: "",
			Uproc: "",
			UresNum: ""
		};

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
			if (this.getAttribute("data-ops") !== 'proc') {
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
			} else {
				proc = true;
				self.UpperDisp.UcurrNum = currNum;
			}

			/* console.log("First= " + oldNum + "; opper= " + calcOperator + "; Second= " + currNum + "; proc= " + proc);*/

			self.opChar = self.getOperand(calcOperator);

			if (!proc) {
				self.UpperDisp.UcalcOperator = self.opChar;
				showResToUpperDisp();
			} else {
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
			console.log('' + self.UpperDisp.UoldNum + self.UpperDisp.UcalcOperator + self.UpperDisp.UcurrNum + self.UpperDisp.Uproc + '=' + self.UpperDisp.UresNum);
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

		/* клик на С */
		clear.onclick = clearAll;
	},

	Ingenering: function Ingenering(containerId) {
		this.container = containerId;
		var self = this;

		var getIngPanels = function getIngPanels() {
			var getAddKeys = __webpack_require__(/*! ../helpers/additionalKeys */ "./src/js/calculator/helpers/additionalKeys.js");
			var getIngAddKeys = document.createElement('div');
			getIngAddKeys.classList.add("ingeneer");
			getIngAddKeys.innerHTML = getAddKeys.ingenering;
			var giveMeBlock = document.getElementById(containerId);
			var additionalKeysBlock = giveMeBlock.getElementsByClassName("additionalKeysBlock")[0];
			var elem = additionalKeysBlock.querySelector('div');
			if (elem) {
				additionalKeysBlock.removeChild(elem);
			}
			additionalKeysBlock.appendChild(getIngAddKeys);
		};

		getIngPanels();
		Calculator.Simple.call(this, containerId);

		var ingUtils = __webpack_require__(/*! ../helpers/utils */ "./src/js/calculator/helpers/utils.js");
		var getIngOperandChar = __webpack_require__(/*! ../helpers/getOperand */ "./src/js/calculator/helpers/getOperand.js");

		var parentGetOperand = self.getOperand;

		self.getOperand = function (operIng) {
			parentGetOperand();
			var IngOpChar;

			switch (operIng) {
				case "plus":
					IngOpChar = getIngOperandChar.plus;break;case "minus":
					IngOpChar = getIngOperandChar.minus;break;
				case "times":
					IngOpChar = getIngOperandChar.times;break;case "divide":
					IngOpChar = getIngOperandChar.divide;break;
				case "sqrt":
					IngOpChar = getIngOperandChar.sqrt;break;case "pow2":
					IngOpChar = getIngOperandChar.pow2;break;
				case "powten":
					IngOpChar = getIngOperandChar.powten;break;case "pow3":
					IngOpChar = getIngOperandChar.pow3;break;
				case "root3":
					IngOpChar = getIngOperandChar.root3;break;case "powY":
					IngOpChar = getIngOperandChar.powY;break;
				case "factorial":
					IngOpChar = getIngOperandChar.fact;break;case "tan":
					IngOpChar = getIngOperandChar.tan;break;
				case "cos":
					IngOpChar = getIngOperandChar.cos;break;case "sin":
					IngOpChar = getIngOperandChar.sin;break;
				case "log":
					IngOpChar = getIngOperandChar.log;break;case "ln":
					IngOpChar = getIngOperandChar.ln;break;

				default:
					IngOpChar = '&nbsp';
			}
			return IngOpChar;
		}.bind(this);
		var parentgetCalculate = self.getCalculate;
		self.getCalculate = function (operIng, oldNum, currNum, proc) {
			parentgetCalculate();
			var IngResNum;
			switch (operIng) {
				case "plus":
					IngResNum = ingUtils.sum(oldNum, currNum, proc);break;case "minus":
					IngResNum = ingUtils.minus(oldNum, currNum, proc);break;
				case "times":
					IngResNum = ingUtils.times(oldNum, currNum, proc);break;case "divide":
					IngResNum = ingUtils.divide(oldNum, currNum, proc);break;
				case "sqrt":
					IngResNum = ingUtils.sqrt(oldNum);break;case "pow2":
					IngResNum = ingUtils.pow2(oldNum);break;
				case "powten":
					IngResNum = ingUtils.powten(oldNum);break;case "pow3":
					IngResNum = ingUtils.pow3(oldNum);break;
				case "root3":
					IngResNum = ingUtils.root3(oldNum);break;case "powY":
					IngResNum = ingUtils.powY(oldNum, currNum);break;
				case "factorial":
					IngResNum = ingUtils.factorial(oldNum);break;case "tan":
					IngResNum = ingUtils.tan(oldNum);break;
				case "cos":
					IngResNum = ingUtils.cos(oldNum);break;case "sin":
					IngResNum = ingUtils.sin(oldNum);break;
				case "log":
					IngResNum = ingUtils.log(oldNum);break;case "ln":
					IngResNum = ingUtils.ln(oldNum);break;

				/* если = был нажат без оператора, сохраняем число и гоним дальше */
				default:
					IngResNum = currNum;
			};
			return IngResNum;
		}.bind(this);
	}
};

function CalcFactory() {};

CalcFactory.prototype = {

	makeSimple: function makeSimple(container) {
		return new Calculator.Simple(container);
	},
	makeIngenering: function makeIngenering(container) {
		return new Calculator.Ingenering(container);
	},
	constructor: CalcFactory
};
var CalcFactory = new CalcFactory();

exports.default = CalcFactory;

/***/ }),

/***/ "./src/js/calculator/calculator.js":
/*!*****************************************!*\
  !*** ./src/js/calculator/calculator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calcFactory = __webpack_require__(/*! ./CalcFactory/calcFactory.js */ "./src/js/calculator/CalcFactory/calcFactory.js");

var _calcFactory2 = _interopRequireDefault(_calcFactory);

var _chTheme = __webpack_require__(/*! ./view/chTheme.js */ "./src/js/calculator/view/chTheme.js");

var _chTheme2 = _interopRequireDefault(_chTheme);

var _chMode = __webpack_require__(/*! ./view/chMode.js */ "./src/js/calculator/view/chMode.js");

var _chMode2 = _interopRequireDefault(_chMode);

var _switchCalcHistBlock = __webpack_require__(/*! ./view/switchCalcHistBlock.js */ "./src/js/calculator/view/switchCalcHistBlock.js");

var _switchCalcHistBlock2 = _interopRequireDefault(_switchCalcHistBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CalcInit(container) {

  _calcFactory2.default.makeSimple(container);
  new _chTheme2.default(container);
  new _chMode2.default(container);
  new _switchCalcHistBlock2.default(container);
};
exports.default = CalcInit;

/***/ }),

/***/ "./src/js/calculator/helpers/additionalKeys.js":
/*!*****************************************************!*\
  !*** ./src/js/calculator/helpers/additionalKeys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAdditionalKeys = {
	ingenering: '<button data-ops="ln" class="calculator__ops">ln</button><button data-ops="log" class="calculator__ops">log</button><button data-ops="sin" class="calculator__ops">sin</button><button data-ops="cos" class="calculator__ops">cos</button><button data-ops="tan" class="calculator__ops">tan</button><button data-ops="factorial" class="calculator__ops">n!</button><button data-ops="pow" class="calculator__ops">x&#696;</button><button data-ops="root3" class="calculator__ops">&#8731;x</button><button data-ops="pow3" class="calculator__ops">x&#179;</button><button data-ops="powten" class="calculator__ops">10&#739;</button>'
};

module.exports = getAdditionalKeys;

/***/ }),

/***/ "./src/js/calculator/helpers/calcHistory.js":
/*!**************************************************!*\
  !*** ./src/js/calculator/helpers/calcHistory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function calcHistory(UpperDisp, container) {
	console.log('Функция подключена');
	var history = document.getElementById(container).getElementsByClassName('history-list')[0];
	var result = '' + UpperDisp.UoldNum + UpperDisp.UcalcOperator + UpperDisp.UcurrNum + UpperDisp.Uproc + '=' + UpperDisp.UresNum;
	var getListLi = document.createElement('li');
	getListLi.innerHTML = result;
	history.appendChild(getListLi);
};
module.exports = calcHistory;

/***/ }),

/***/ "./src/js/calculator/helpers/getOperand.js":
/*!*************************************************!*\
  !*** ./src/js/calculator/helpers/getOperand.js ***!
  \*************************************************/
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

module.exports = { sum: sum, minus: minus, times: times, divide: divide, sqrt: sqrt, pow2: pow2, powten: powten, pow3: pow3, root3: root3, powY: powY, factorial: factorial, tan: tan, cos: cos, sin: sin, log: log, ln: ln };

/***/ }),

/***/ "./src/js/calculator/view/chMode.js":
/*!******************************************!*\
  !*** ./src/js/calculator/view/chMode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _calcFactory = __webpack_require__(/*! ../CalcFactory/calcFactory.js */ "./src/js/calculator/CalcFactory/calcFactory.js");

var _calcFactory2 = _interopRequireDefault(_calcFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSimpleMode = function getSimpleMode(container) {
	var closeIngPanels = function closeIngPanels() {
		var additionalKeysBlock = document.getElementById(container).getElementsByClassName("additionalKeysBlock")[0];
		var elem = additionalKeysBlock.querySelector('div');
		if (elem) {
			additionalKeysBlock.removeChild(elem);
		};
	};
	closeIngPanels();
	_calcFactory2.default.makeSimple(container);
};
var getEngMode = function getEngMode(container) {
	_calcFactory2.default.makeIngenering(container);
};

function changeMode(container) {
	var elem = document.getElementById(container).getElementsByClassName('submenu__mode')[0];
	//console.log(elem);
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

/***/ "./src/js/calculator/view/chTheme.js":
/*!*******************************************!*\
  !*** ./src/js/calculator/view/chTheme.js ***!
  \*******************************************/
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

/***/ "./src/js/calculator/view/switchCalcHistBlock.js":
/*!*******************************************************!*\
  !*** ./src/js/calculator/view/switchCalcHistBlock.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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