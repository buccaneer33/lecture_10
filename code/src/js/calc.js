
(function() {
  "use strict";

  /* ярлыки для быстрого разначения */
  var el = function(element) {
    if (element.charAt(0) === "#") { /* Если выпала решетка */
    return document.querySelector(element); /* возвращаем единичный элемент */
    }

    return document.querySelectorAll(element); /* в противном случае возвращаем лист */
  };

  /* Создаем переменные */
  var display       = el("#display"),         /* дисплей калькулятора */
      result        = el("#result"),          /* кнопка равно */
      calculatorNum = el(".calculator__num"), /* книпки чисел */
      calculatorOps = el(".calculator__ops"), /* кнопки операторов */
	    resNum,                                 /* Для сохранения результата */
	    oldNum = "",                            /* сюда кладем первый операнд */
      currNum = "",                           /* сюда последующий операнд */
      operator;                               /* какой оператор будем использовать */

  /* если: клик по числу */
  var setNum = function() {
    if (resNum) { /* number если на дисплее отражен результат */
    /*  console.log(resNum); */
    currNum = this.getAttribute("data-num"); /* заносим в переменную */
    /*  console.log(currNum); */
    resNum = "";
	} else { /* если нет, добавляем число в  предыдущий операнд */
    currNum += this.getAttribute("data-num");
    }
    display.innerHTML = currNum; /* Отобразить второй операнд */
  };

  /* если: клик был по оператору. записываем число в oldNum и сохраняем значение оператора */
  var moveNum = function() {
    oldNum = currNum;
    currNum = "";
    /*  console.log(oldNum); */
    operator = this.getAttribute("data-ops");
    result.setAttribute("data-result", ""); /* сбрасываем аттрибут на = */
  };

  /* если: клик был по =. вычисляем результат */
  var displayNum = function() {

    /* выполняем преобразование в числа с плавающей точкой */
    oldNum = parseFloat(oldNum);
    currNum = parseFloat(currNum);
    /* console.log(oldNum); */
    /* console.log(currNum);*/

    /* выполняем операцию */
    switch (operator) {
      case "plus":
        resNum = oldNum + currNum;
        break;

      case "minus":
        resNum = oldNum - currNum;
        break;

      case "times":
        resNum = oldNum * currNum;
        break;

      case "divided by":
        resNum = oldNum / currNum;
        break;

        /* если = был нажат без оператора, сохраняем число и гоним дальше */
      default:
        resNum = currNum;
    }

    /* если результат вычислений вернул NaN или бесконечность */
     /* console.log(resNum); */
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
    result.setAttribute("data-result", resNum);

    /* и обнуление переменных */
    oldNum = 0;
    currNum = resNum;
  };

  /* клик по кнопке С. обнуляем все. */
  var clearAll = function() {
    oldNum = "";
    currNum = "";
    display.innerHTML = "0";
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

}());
