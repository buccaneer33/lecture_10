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

/***/ "./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Calculator() {

		var utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
		var getOperandChar = __webpack_require__(/*! ./getOperand */ "./src/js/getOperand.js");

		var opChar;
		var self = this;
		/*self.operator = "";*/
		self.opChar = opChar;

		self.getOperand = function (operator) {
				switch (operator) {
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

		/* ярлыки для быстрого разначения */
		var el = function el(element) {
				if (element.charAt(0) === "#") {
						/* Если выпала решетка */
						return document.querySelector(element); /* возвращаем единичный элемент */
				}
				return document.querySelectorAll(element); /* в противном случае возвращаем лист */
		};

		/* Создаем переменные */
		var display = el("#display"),
		    /* дисплей калькулятора */
		displayUpper = el('#displayUpper'),
		    /* верхний дисплей *
      result        = el("#result"),          /* кнопка равно */
		calculatorNum = el(".calculator__num"),
		    /* кнопки чисел */
		calculatorOps = el(".calculator__ops"),
		    /* кнопки операторов */
		resNum,
		    /* Для сохранения результата */
		oldNum = "",
		    /* сюда кладем первый операнд */
		currNum = "",
		    /* сюда последующий операнд */
		operator,
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
		};

		/* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
		var moveNum = function moveNum() {

				if (this.getAttribute("data-ops") !== 'proc') {

						if (oldNum == "") {
								oldNum = currNum;
								currNum = "";
								displayUpper.innerHTML = oldNum;
								self.operator = this.getAttribute("data-ops");
								operator = self.operator;
						} else {
								currNum = currNum;
						}
				} else {
						proc = true;
						displayUpper.innerHTML = currNum;
				}

				/*	alert(operator); */

				self.getOperand(operator);
				opChar = self.opChar;

				if (!proc) {
						displayUpper.innerHTML = oldNum + opChar; /* заносим операнд в дисплей */
				} else {
						displayUpper.innerHTML = oldNum + opChar + currNum + getOperandChar.proc;
				};

				result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
		};

		/*	console.log("First= " + oldNum + "; opper= " + operator + "; Second= " + currNum + "; proc= " + proc); */

		/* если: клик был по =. вычисляем результат */
		var displayNum = function displayNum() {
				displayUpper.innerHTML += currNum;

				/* выполняем преобразование в числа с плавающей точкой */
				oldNum = parseFloat(oldNum);
				currNum = parseFloat(currNum);

				/* выполняем операцию */

				var self = this;
				self.getCalculate = function (operator) {

						switch (operator) {

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
				};

				self.getCalculate(operator);

				/* если результат вычислений вернул NaN или бесконечность */
				if (!isFinite(resNum)) {
						if (isNaN(resNum)) {
								/* если результат NaN */
								resNum = "Wrong result";
						} else {
								/* если в результате деления на ноль результат бесконечность */
								resNum = "Divide by ZERO!!!!";
								el('#calculator').classList.add("broken"); /* ломаем калькулятор */
						}
				}

				/* если результат получен и он не NaN и не бесконечность показываем результат */
				display.innerHTML = resNum;
				displayUpper.innerHTML = "&nbsp";
				result.setAttribute("data-result", resNum);

				/* и обнуление переменных */
				oldNum = "";
				proc = false;
				currNum = resNum;
		};

		/* клик по кнопке С. обнуляем все. */
		var clearAll = function clearAll() {
				oldNum = "";
				currNum = "";
				display.innerHTML = "0";
				displayUpper.innerHTML = "&nbsp";
				result.setAttribute("data-result", resNum);
				proc = false;
		};

		this.run = function () {
				/* на запуске отслеживаем эвенты */

				/* эвент на клик числа */
				for (var i = 0, l = calculatorNum.length; i < l; i++) {
						calculatorNum[i].onclick = setNum;
				}

				/* эвент на клик оператора */
				for (var i = 0, l = calculatorOps.length; i < l; i++) {
						calculatorOps[i].onclick = moveNum;
				}

				/* эвент на клик равно */
				result.onclick = displayNum;

				/* клик на С */
				el("#clear").onclick = clearAll;
		};
};

function IngCalculator() {
		Calculator.call(this);

		var self = this;
		var operator = self.operator;
		var opChar = self.opChar;
		var parentGetOperand = self.getOperand;
		/*      переменная operator не переходит из основного кода.      */

		self.getOperand = function () {
				parentGetOperand.call(self);
				console.log("oper " + operator);
				//self.run();
				switch (operator) {
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

						case "powten":
								opChar = getOperandChar.powten;break;
						case "pow3":
								opChar = getOperandChar.pow3;break;
						case "root3":
								opChar = getOperandChar.root3;break;
						case "powY":
								opChar = getOperandChar.powY;break;
						case "factorial":
								opChar = getOperandChar.fact;break;
						case "tan":
								opChar = getOperandChar.tan;break;
						case "cos":
								opChar = getOperandChar.cos;break;
						case "sin":
								opChar = getOperandChar.sin;break;
						case "log":
								opChar = getOperandChar.log;break;
						case "ln":
								opChar = getOperandChar.ln;break;

						default:
								opChar = '&nbsp';
				}
				return opChar;
				console.log(opChar);
		};

		//	self.getOperand(self.operator);

		/*
    var displayNum = function() {
  		var self = this;
  		self.getCalculate = function(operator){
  			switch (operator) {
  
  				case "plus": resNum = utils.sum(oldNum, currNum, proc); break;
  				case "minus": resNum = utils.minus(oldNum, currNum, proc); break;
  				case "times": resNum = utils.times(oldNum, currNum, proc); break;
  				case "divide": resNum = utils.divide(oldNum, currNum, proc); break;
  				case "sqrt": resNum = utils.sqrt(oldNum); break;
  				case "pow2": resNum = utils.pow2(oldNum); break;
  
  				case "powten": resNum = utils.powten(oldNum); break;
  				case "pow3": resNum = utils.pow3(oldNum); break;
  				case "root3": resNum = utils.root3(oldNum);	break;
  				case "powY": resNum = utils.powY(oldNum, currNum); break;
  				case "factorial": resNum = utils.factorial(oldNum); break;
  				case "tan": resNum = utils.tan(oldNum); break;
  				case "cos": resNum = utils.cos(oldNum); break;
  				case "sin": resNum = utils.sin(oldNum); break;
  				case "log": resNum = utils.log(oldNum); break;
  				case "ln": resNum = utils.ln(oldNum); break;
  
  					/* если = был нажат без оператора, сохраняем число и гоним дальше */
		/*	default:
  		resNum = currNum;
  };
  return resNum;
  	};
  } */
};

//var calculator = new Calculator();
//calculator.run();

var IngCalculator = new IngCalculator();

IngCalculator.run();

/***/ }),

/***/ "./src/js/chMode.js":
/*!**************************!*\
  !*** ./src/js/chMode.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
	var getSimpleMode = function getSimpleMode() {
		document.getElementById('ingeneer').classList.add("display--none");
	};
	var getEngMode = function getEngMode() {
		document.getElementById('ingeneer').classList.remove("display--none");
	};

	function changeMode(elem) {
		this.eng = function () {
			getEngMode();
		};
		this.simple = function () {
			getSimpleMode();
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
	new changeMode(submenu__list);
})();

/***/ }),

/***/ "./src/js/chTheme.js":
/*!***************************!*\
  !*** ./src/js/chTheme.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var getCalcLight = function getCalcLight() {
    document.getElementById('calculator').classList.add("calculator--theme-light");
  };
  var getCalcDark = function getCalcDark() {
    document.getElementById('calculator').classList.remove("calculator--theme-light");
  };

  function changeTheme(elem) {
    this.dark = function () {
      getCalcDark();
    };
    this.light = function () {
      getCalcLight();
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
  new changeTheme(submenu__radios);
})();

/***/ }),

/***/ "./src/js/getOperand.js":
/*!******************************!*\
  !*** ./src/js/getOperand.js ***!
  \******************************/
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

/***/ "./src/js/img.js":
/*!***********************!*\
  !*** ./src/js/img.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import '../img/Calculator.png';
//import '../../assets/slider/2.jpg';
//import '../../assets/slider/3.jpg';
//import '../../assets/slider/4.jpg';
//import '../../assets/slider/5.jpg';
//import '../../assets/slider/6.jpg';
//import '../../assets/news/img1.jpg';
//import '../../assets/news/img2.jpg';
//import '../../assets/news/img3.jpg';
//import '../../assets/latest/dance.jpg';
//import '../../assets/img8.jpg';
//import '../../assets/img9.jpg';

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./img.js */ "./src/js/img.js");

__webpack_require__(/*! ./calc.js */ "./src/js/calc.js");

__webpack_require__(/*! ./chTheme.js */ "./src/js/chTheme.js");

__webpack_require__(/*! ./chMode.js */ "./src/js/chMode.js");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
	var res = op1 ? op1 * factorial(op1 - 1) : 1;return res;
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