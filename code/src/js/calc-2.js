"use strict";

(function() {
	var  utils = require('./utils');
	var  getOperandChar = require('./getOperand');

  /* ярлыки для быстрого разначения */
  var el = function(element) {
    if (element.charAt(0) === "#") { /* Если выпала решетка */
    return document.querySelector(element); /* возвращаем единичный элемент */
    }

    return document.querySelectorAll(element); /* в противном случае возвращаем лист */
  };

  /* Создаем переменные */
  var display       = el("#display"),         /* дисплей калькулятора */
			displayUpper  = el('#displayUpper'),     /* верхний дисплей */
      result        = el("#result"),          /* кнопка равно */
      calculatorNum = el(".calculator__num"), /* кнопки чисел */
      calculatorOps = el(".calculator__ops"), /* кнопки операторов */
	    resNum,                                 /* Для сохранения результата */
	    oldNum = "",                            /* сюда кладем первый операнд */
      currNum = "",                           /* сюда последующий операнд */
      operator,                               /* какой оператор будем использовать */
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
				oldNum = currNum;
				currNum = "";
				displayUpper.innerHTML += oldNum;
				operator = this.getAttribute("data-ops");

			}
			else{
				proc = true;
				displayUpper.innerHTML += currNum;
			}



	console.log("First= " + oldNum + "; opper= " + operator + "; Second= " + currNum + "; proc= " + proc);


	/*	alert(operator); */

		var opChar;
		switch (operator) {
      case "plus": opChar = getOperandChar.plus; break;

      case "minus":	opChar = getOperandChar.minus; break;

      case "times": opChar = getOperandChar.times; break;

      case "divide": opChar = getOperandChar.divide; break;

			case "sqrt": opChar = getOperandChar.sqrt; break;

			case "pow2": opChar = getOperandChar.pow2; break;

			case "powten": opChar = getOperandChar.powten; break;

			case "pow3": opChar = getOperandChar.pow3; break;

			case "root3": opChar = getOperandChar.root3;	break;

			case "powY": opChar = getOperandChar.powY; break;

			case "factorial": opChar = getOperandChar.fact; break;

			case "tan": opChar = getOperandChar.tan; break;

			case "cos": opChar = getOperandChar.cos; break;

			case "sin": opChar = getOperandChar.sin; break;

			case "log": opChar = getOperandChar.log; break;

			case "ln": opChar = getOperandChar.ln; break;

		//	console.log("First= " + oldNum + "; opper= " + operator + "; Second= " + currNum + "; proc= " + proc)

      default:
        opChar = '&nbsp';
    }


		if(!proc){
			displayUpper.innerHTML +=  opChar; /* заносим операнд в дисплей */
		} else {
			displayUpper.innerHTML = getOperandChar.proc;
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
      default:
        resNum = currNum;
    }

    /* если результат вычислений вернул NaN или бесконечность */
    if (!isFinite(resNum)) {
      if (isNaN(resNum)) { /* если результат NaN */
        resNum = "Wrong result";
      } else { /* если в результате деления на ноль результат бесконечность */
        resNum = "Divide by ZERO!!!!";
        el('#calculator').classList.add("broken"); /* ломаем калькулятор */
      }
    }

    /* если результат получен и он не NaN и не бесконечность показываем результат */
    display.innerHTML = resNum;
		displayUpper.innerHTML = "&nbsp"
    result.setAttribute("data-result", resNum);

    /* и обнуление переменных */
    oldNum = 0;
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

}());
