import Navigation from './nav/nav';
//import Display from './display/display';
import CalcLog from './calc_log/calc_log';
import getOperandChar from '../../helpers/get_operand';
import getCalculate from '../../helpers/get_calculate';
import getAdditionalKeys from '../../helpers/additional_keys';
import changeTheme from '../../view/ch_theme';


class SimpleCalculator {

  constructor(container) {

    /*объявляем переменные*/

    this.container     = document.querySelector(`#${container}`); /* находим контейнер в котором будем запускать */
    this.calculatorNum = this.container.getElementsByClassName("calculator__num"); /* кнопки чисел */
    this.calculatorOps = this.container.getElementsByClassName("calculator__ops"); /* кнопки операторов */
    this.changeMode    = this.container.querySelector('.submenu__mode');
    this.calcLog       = this.container.querySelector('.submenu__hist');
    this.clearCalcLog  = this.container.querySelector('.history__clear');
    this.result        = this.container.querySelector('.calculator__result'); /* кнопка равно */
    this.clear         = this.container.querySelector('.calculator__clear'); /* кнопка C */
    this.displayUpper  = this.container.querySelector('.calculator__display-upper');  /* верхний дисплей */
    this.display       = this.container.querySelector('.calculator__display'); /* дисплей калькулятора */


    this.buffNum;
    this.buffOp;

    var result = this.result;
    var displayUpper = this.displayUpper;
    var display = this.display;


        this.showResToUpperDisp = () => {
         displayUpper.innerHTML = `${data.oldNum}${data.opChar}${data.currNum}${data.proc}`;
        };
        this.clearUpperDisp = () => {
         data = {oldNum: "", currNum: "", calcOp: "", opChar: "", proc: "", resNum: ""};
        }

         /* Создаем объект с переменными2 */
         this.data = {
          oldNum: "",   /* сюда кладем первый операнд */
          currNum: "",  /* сюда последующий операнд */
          calcOp: "",   /* какой оператор будем использовать */
          opChar: "",   /* символ операнда */
          proc: "",     /* будем ли использовать проценты */
          resNum: ""    /* Для сохранения результата */
         };
         var data = this.data;

         //this.getAddKeys('simple');

         changeTheme(container);
         /* эвент на клик числа */
         for (let i = 0;  i < this.calculatorNum.length; i++) {
          let button = this.calculatorNum[i];
          button.addEventListener('click', ()=>{this.buffNum = button.getAttribute('data-num'); this.setNum(this)});
         }
         /* эвент на клик оператора */
         for (let i = 0; i < this.calculatorOps.length; i++) {
          let button = this.calculatorOps[i];
          button.addEventListener('click', ()=>{this.buffOp = button.getAttribute('data-ops'); this.moveNum(this)});
         }
         /* эвент на клик равно */
         this.result.addEventListener('click', this.displayNum.bind(this))

         /* клик на С */
         this.clear.addEventListener('click', this.clearAll.bind(this))
         /*конец логики*/
  }

  clearAll(){   /* клик по кнопке С. обнуляем все. */
   let data = this.data;
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
  setNum(){
   let data = this.data;
       if (data.resNum) { /* number если на дисплее отражен результат */
        data.currNum = this.buffNum; /* заносим в переменную */
        data.resNum = "";
     } else { /* если нет, добавляем число в  предыдущий операнд */
        data.currNum += this.buffNum;
     }
     this.display.innerHTML = data.currNum; /* Отобразить второй операнд */
  }
  moveNum(){
   let data = this.data;
   if (this.buffOp!=='proc' && this.buffOp!=='opReverse'){

      if (data.oldNum == ""){
       data.oldNum = data.currNum;
       data.currNum = "";
       data.calcOp = this.buffOp;
       this.showResToUpperDisp();

     } else {
       data.currNum = data.currNum;
       this.showResToUpperDisp();
     }

   } else if(this.buffOp =='opReverse' && this.buffOp !='proc'){
      data.currNum = getCalculate(data.currNum, 'opReverse');
      this.showResToUpperDisp();

   }else if (this.buffOp =='proc'){
      data.proc = true;
      data.currNum = data.currNum;
   }


   data.opChar = getOperandChar(data.calcOp);
   console.log("First= " +  data.oldNum + "; opper= " +  data.calcOp + "; Second= " +  data.currNum + "; opChar= " + data.opChar +"; proc= " +  data.proc);


 /*если процент не был нажат*/
  if(!data.proc){
     this.showResToUpperDisp();
   } else { /*если был то вычисляем с процентами*/
     data.proc = getOperandChar('proc');
     this.showResToUpperDisp();
   };
     this.result.setAttribute("data-result", "");

  }
  displayNum(){
   this.calcLog = new CalcLog(this.container);
   let data = this.data;
      /* выполняем преобразование в числа с плавающей точкой */
      data.oldNum = parseFloat(data.oldNum);
      data.currNum = parseFloat(data.currNum);

      /* выполняем операцию */
     data.resNum = getCalculate(data.oldNum, data.currNum, data.calcOp, data.proc);
     this.showResToUpperDisp();

      /* если результат вычислений вернул NaN или бесконечность */
      if (!isFinite(data.resNum)) {
        if (isNaN(data.resNum)) { /* если результат NaN */
          data.resNum = "Wrong result";
        } else { /* если в результате деления на ноль результат бесконечность */
          data.resNum = "Divide by ZERO!!!!";
          calcBlock.classList.add("broken"); /* ломаем калькулятор */
        }
      }
      /* если результат получен и он не NaN и не бесконечность показываем результат */
    this.display.innerHTML = data.resNum;

    let pushToLog = this.calcLog;

    this.calcLog.pushToCalcLog(this.container,data.oldNum, data.currNum, data.opChar, data.resNum)

    this.result.setAttribute("data-result", data.resNum);

      /* и обнуление переменных */
    this.showResToUpperDisp();
    this.clearUpperDisp();
  }
  getAddKeys(mode){
   let getAddKeys = getAdditionalKeys(mode);

   let getIngAddKeys = document.createElement('div');
   getIngAddKeys.classList.add(mode);
   getIngAddKeys.innerHTML = getAddKeys;
   let additionalKeysBlock = document.getElementById(container).querySelector(".calculator__additional-keys-block");
   let elem = additionalKeysBlock.querySelector('div');
   if (elem){additionalKeysBlock.removeChild(elem);}
   additionalKeysBlock.appendChild(getIngAddKeys);
  }

};
export default SimpleCalculator;
