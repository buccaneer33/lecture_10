'use stric';

class CalcLog {
    constructor (container) {
        this.calcLog     = container.querySelector('.calculator__display-hist');
        this.calcLogList = container.querySelector('.history-list');
        this.cond        = 'closed';
    };

    openCalcLog () {
        if (this.cond  === 'closed') {
            this.calcLog.style.height = 100+"px";
            this.cond  = 'opened';
        } else {
            this.calcLog.style.height = 0+"px";
            this.cond  = 'closed';
        };
    };

    clearCalcLog () {
      let elem = this.calcLogList.childNodes;
      if(elem){
          while (calcLogList.firstChild) {
            calcLogList.removeChild(calcLogList.firstChild);
          }
        }
    };

    static pushToCalcLog (container, upperDisplay, oldNum, currNum, operand) {

        let elem = document.createElement('li');
        elem.innerHTML = 123; // не забыть вставить результат


        this.calcLogList.appendChild(elem);
    };
};

export default CalcLog;
