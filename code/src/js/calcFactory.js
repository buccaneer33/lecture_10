"use strict";

var Calculator = {
	Simple: function (containerId) {

		var opChar;
		var self = this;
		this.container = containerId;
		//var cont = this.container;
		self.opChar;
		self.resNum;
		self.oldnum;
		self.currNum;
		self.proc;

		var  utils = require('./utils');
		var  getOperandChar = require('./getOperand');


		self.getOperand = function(calcOp){
			switch (calcOp) {
				case "plus":   opChar = getOperandChar.plus; break;
				case "minus":	 opChar = getOperandChar.minus; break;
				case "times":  opChar = getOperandChar.times; break;
				case "divide": opChar = getOperandChar.divide; break;
				case "sqrt":   opChar = getOperandChar.sqrt; break;
				case "pow2":   opChar = getOperandChar.pow2; break;
				default:    	 opChar = '&nbsp';
			}
			return opChar;
		}.bind(this);

		self.getCalculate = function(calcOper, oldNum, currNum, proc){

			switch (calcOper) {

				case "plus":   resNum = utils.sum(oldNum, currNum, proc); break;
				case "minus":  resNum = utils.minus(oldNum, currNum, proc); break;
				case "times":  resNum = utils.times(oldNum, currNum, proc); break;
				case "divide": resNum = utils.divide(oldNum, currNum, proc); break;
				case "sqrt":   resNum = utils.sqrt(oldNum); break;
				case "pow2":   resNum = utils.pow2(oldNum); break;
					/* если = был нажат без оператора, сохраняем число и гоним дальше */
				default:  		 resNum = currNum;
			};
			return resNum;
		}.bind(this);

	  /* ярлыки для быстрого разначения */
	  var el = function(element) {
	    if (element.charAt(0) === "#") { /* Если выпала решетка */
	    return document.querySelector(element); /* возвращаем единичный элемент */
	    }
	    return document.querySelectorAll(element); /* в противном случае возвращаем лист */
	  };
		 /* Создаем переменные */

		 console.log("containerID = " + self.container);

	  var calcBlock 		= document.getElementById(self.container), /* находим контейнер в котором будем запускать */
				display       = calcBlock.getElementsByClassName('calculator__display')[0], /* дисплей калькулятора */
				displayUpper  = calcBlock.getElementsByClassName('calculator__display-upper')[0], /* верхний дисплей */
		    result        = calcBlock.getElementsByClassName("calculator__result")[0], /* кнопка равно */
				clear         = calcBlock.getElementsByClassName("calculator__clear")[0], /* кнопка C */
	      calculatorNum = calcBlock.getElementsByClassName("calculator__num"), /* кнопки чисел */
	      calculatorOps = calcBlock.getElementsByClassName("calculator__ops"), /* кнопки операторов */
		    resNum,                                 /* Для сохранения результата */
		    oldNum = "",                            /* сюда кладем первый операнд */
	      currNum = "",                           /* сюда последующий операнд */
	      calcOperator,                               /* какой оператор будем использовать */
				proc					= false;		   						/* будем ли использовать проценты */

	  /* если: клик по числу */
	  var setNum = function() {
	    if (resNum) { /* number если на дисплее отражен результат */
	    currNum = this.getAttribute("data-num"); /* заносим в переменную */
	    resNum = "";
		} else { /* если нет, добавляем число в  предыдущий операнд */
	    currNum += this.getAttribute("data-num");
	    }
	    display.innerHTML = currNum; /* Отобразить второй операнд */
	  };
	  /* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
	  var moveNum = function() {
				if (this.getAttribute("data-ops")!=='proc'){

						if (oldNum == ""){
							oldNum = currNum;
							currNum = "";
							displayUpper.innerHTML = oldNum ;
							self.operator = this.getAttribute("data-ops");
							calcOperator =	self.operator;
						} else {
							currNum = currNum;
						}
				}
				else{
					proc = true;
					displayUpper.innerHTML = currNum;
				}

		/* console.log("First= " + oldNum + "; opper= " + calcOperator + "; Second= " + currNum + "; proc= " + proc);*/

			self.opChar = self.getOperand(calcOperator);

			if(!proc){
					displayUpper.innerHTML = oldNum + self.opChar;      /* заносим операнд в дисплей */
				} else {
					displayUpper.innerHTML = oldNum + self.opChar + currNum +  getOperandChar.proc;
				};
	    result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
	  };

	  /* если: клик был по =. вычисляем результат */
		var displayNum = function() {
			displayUpper.innerHTML +=  currNum;

	    /* выполняем преобразование в числа с плавающей точкой */
	    oldNum = parseFloat(oldNum);
	    currNum = parseFloat(currNum);

	    /* выполняем операцию */
			self.resNum = self.getCalculate(calcOperator, oldNum, currNum, proc);
			resNum = self.resNum;

	    /* если результат вычислений вернул NaN или бесконечность */
	    if (!isFinite(resNum)) {
	      if (isNaN(resNum)) { /* если результат NaN */
	        resNum = "Wrong result";
	      } else { /* если в результате деления на ноль результат бесконечность */
	        resNum = "Divide by ZERO!!!!";
	        calcBlock.classList.add("broken"); /* ломаем калькулятор */
	      }
	    }

	    /* если результат получен и он не NaN и не бесконечность показываем результат */
	    display.innerHTML = resNum;
			displayUpper.innerHTML = "&nbsp"
	    result.setAttribute("data-result", resNum);

	    /* и обнуление переменных */
	    oldNum = "";
			proc = false;
	    currNum = resNum;
	  };

	  /* клик по кнопке С. обнуляем все. */
	  var clearAll = function() {
	    oldNum = "";
	    currNum = "";
	    display.innerHTML = "0";
			displayUpper.innerHTML = "&nbsp"
	    result.setAttribute("data-result", resNum);
			proc = false;
	  };


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
			clear.onclick = clearAll;


	},

	Ingenering: function (containerId){
		this.container = containerId;

	//	var container = containerIng;
	//	var containerIngId = ("'" + container + "'");

		console.log("containerIng = " + containerId);
		//console.log("containerIngId = " + containerIngId);

		var getAddKeys = require('./additionalKeys');
		var getIngAddKeys = document.createElement('div');
		getIngAddKeys.classList.add("ingeneer");
		getIngAddKeys.innerHTML = getAddKeys.ingenering;
		var additionalKeysBlock = document.getElementsByClassName("additionalKeysBlock")[0];
		additionalKeysBlock.appendChild(getIngAddKeys);



				var self = this;
				Calculator.Simple.call(this, containerId);

				var  ingUtils = require('./utils');
				var  getIngOperandChar = require('./getOperand');


				var parentGetOperand = self.getOperand;
				self.getOperand = function(operIng){
					parentGetOperand();
				//	this.run();
					var IngOpChar;
					switch (operIng) {
						case "plus":  		IngOpChar = getIngOperandChar.plus;  break;		case "minus":	IngOpChar = getIngOperandChar.minus; break;
						case "times": 		IngOpChar = getIngOperandChar.times; break;		case "divide":IngOpChar = getIngOperandChar.divide; break;
						case "sqrt":  		IngOpChar = getIngOperandChar.sqrt; break;		case "pow2":  IngOpChar = getIngOperandChar.pow2; break;
						case "powten":    IngOpChar = getIngOperandChar.powten; break; 	case "pow3":  IngOpChar = getIngOperandChar.pow3; break;
						case "root3":     IngOpChar = getIngOperandChar.root3;	break; 	case "powY":  IngOpChar = getIngOperandChar.powY; break;
						case "factorial": IngOpChar = getIngOperandChar.fact; break; 		case "tan":   IngOpChar = getIngOperandChar.tan; break;
						case "cos":       IngOpChar = getIngOperandChar.cos; break; 		case "sin":   IngOpChar = getIngOperandChar.sin; break;
						case "log":       IngOpChar = getIngOperandChar.log; break; 		case "ln":    IngOpChar = getIngOperandChar.ln; break;

						default:
							IngOpChar = '&nbsp';
					}
					return IngOpChar;
				};
			var parentgetCalculate = self.getCalculate;
			self.getCalculate = function(operIng, oldNum, currNum, proc){
				parentgetCalculate();
				//this.run();
				var IngResNum;
				switch (operIng) {
					case "plus": IngResNum = ingUtils.sum(oldNum, currNum, proc); break;
					case "minus": IngResNum = ingUtils.minus(oldNum, currNum, proc); break;
					case "times": IngResNum = ingUtils.times(oldNum, currNum, proc); break;
					case "divide": IngResNum = ingUtils.divide(oldNum, currNum, proc); break;
					case "sqrt": IngResNum = ingUtils.sqrt(oldNum); break;
					case "pow2": IngResNum = ingUtils.pow2(oldNum); break;
					case "powten": IngResNum = ingUtils.powten(oldNum); break;
					case "pow3": IngResNum = ingUtils.pow3(oldNum); break;
					case "root3": IngResNum = ingUtils.root3(oldNum);	break;
					case "powY": IngResNum = ingUtils.powY(oldNum, currNum); break;
					case "factorial": IngResNum = ingUtils.factorial(oldNum); break;
					case "tan": IngResNum = ingUtils.tan(oldNum); break;
					case "cos": IngResNum = ingUtils.cos(oldNum); break;
					case "sin": IngResNum = ingUtils.sin(oldNum); break;
					case "log": IngResNum = ingUtils.log(oldNum); break;
					case "ln": IngResNum = ingUtils.ln(oldNum); break;

						/* если = был нажат без оператора, сохраняем число и гоним дальше */
					default:
						IngResNum = currNum;
				};
				return IngResNum;
			};
	}
};

function CalcFactory(){
	//this.container = container;

};

CalcFactory.prototype = {


    makeSimple: function (container) {
         return new Calculator.Simple(container);
    },
    makeIngenering: function (container) {
         return new Calculator.Ingenering(container);
    },
		constructor: CalcFactory
};
var factory = new CalcFactory();

factory.makeIngenering('calculator1');
factory.makeSimple('calculator2');
