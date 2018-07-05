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


(function () {
  "use strict";

  var utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
  var getOperandChar = __webpack_require__(/*! ./getOperand */ "./src/js/getOperand.js");

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
      /* верхний дисплей */
  result = el("#result"),
      /* кнопка равно */
  calculatorNum = el(".calculator__num"),
      /* книпки чисел */
  calculatorOps = el(".calculator__ops"),
      /* кнопки операторов */
  resNum,
      /* Для сохранения результата */
  oldNum = "",
      /* сюда кладем первый операнд */
  currNum = "",
      /* сюда последующий операнд */
  operator; /* какой оператор будем использовать */

  /* если: клик по числу */
  var setNum = function setNum() {
    if (resNum) {
      /* number если на дисплее отражен результат */
      /*  console.log(resNum); */
      currNum = this.getAttribute("data-num"); /* заносим в переменную */
      /*  console.log(currNum); */
      resNum = "";
    } else {
      /* если нет, добавляем число в  предыдущий операнд */
      currNum += this.getAttribute("data-num");
    }
    display.innerHTML = currNum; /* Отобразить второй операнд */
  };

  /* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
  var moveNum = function moveNum() {
    oldNum = currNum;
    currNum = "";
    /*  console.log(oldNum); */

    operator = this.getAttribute("data-ops");
    //alert(operator);
    var opChar;
    switch (operator) {
      case "plus":
        opChar = '+';
        break;

      case "minus":
        opChar = '-';
        break;

      case "times":
        opChar = '*';
        break;

      case "divided by":
        opChar = '/';
        break;

      default:
        opChar = '.';
        alert(opChar);
    }
    displayUpper.innerHTML = opChar; /* заносим операнд в дисплей */
    result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
  };

  /* если: клик был по =. вычисляем результат */
  var displayNum = function displayNum() {

    /* выполняем преобразование в числа с плавающей точкой */
    oldNum = parseFloat(oldNum);
    currNum = parseFloat(currNum);
    /* console.log(oldNum); */
    /* console.log(currNum);*/

    /* выполняем операцию */
    switch (operator) {
      case "plus":
        resNum = utils.sum(oldNum, currNum);
        break;

      case "minus":
        resNum = utils.minus(oldNum, currNum);
        break;

      case "times":
        resNum = utils.times(oldNum, currNum);
        break;

      case "divided by":
        resNum = utils.divide(oldNum, currNum);
        break;

      /* если = был нажат без оператора, сохраняем число и гоним дальше */
      default:
        resNum = currNum;
    }

    /* если результат вычислений вернул NaN или бесконечность */
    /* console.log(resNum); */
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
    displayUpper.innerHTML = ".";
    result.setAttribute("data-result", resNum);

    /* и обнуление переменных */
    oldNum = 0;
    currNum = resNum;
  };

  /* клик по кнопке С. обнуляем все. */
  var clearAll = function clearAll() {
    oldNum = "";
    currNum = "";
    display.innerHTML = "0";
    displayUpper.innerHTML = ".";
    result.setAttribute("data-result", resNum);
  };

  /* отслеживаем эвенты */

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
  'use strict';

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
/* export switch (operator) {
	case "plus":
	res = '+';
		break;

	case "minus":
	res = '-';
		break;

	case "times":
		res = '*';
		break;

	case "divided by":
		res = '/';
		break;

	case "proc":
		res = '%';
		break;
	default:
		res = '.';
}
*/


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


__webpack_require__(/*! ./getOperand.js */ "./src/js/getOperand.js");

__webpack_require__(/*! ./utils.js */ "./src/js/utils.js");

__webpack_require__(/*! ./img.js */ "./src/js/img.js");

__webpack_require__(/*! ./calc.js */ "./src/js/calc.js");

__webpack_require__(/*! ./chTheme.js */ "./src/js/chTheme.js");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.sum = sum;
exports.minus = minus;
exports.times = times;
exports.divide = divide;
function sum(op1, op2) {
		return exports.sum = sum = op1 + op2;
};
function minus(op1, op2) {
		return exports.minus = minus = op1 - op2;
};
function times(op1, op2) {
		return exports.times = times = op1 * op2;
};
function divide(op1, op2) {
		return exports.divide = divide = op1 / op2;
};
/*
export function reverse(op1){
	return reverse = op1 / op2;
};
export function root(op1){
	return root = op1 / op2;
};*/

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