'use strict';

class Display {
    constructor (container) {
        this.primDisplay = container.querySelector('.calculator-display');
        this.secDisplay  = container.querySelector('.calculator-subDisplay');
        this.histDisplay = container.querySelector('.history-list');
    }

    updateDisplay (display) {
      if (display === 0) this.primDisplay.textContent = '0';
      if (display) this.primDisplay.textContent = display;

    }
    updateSecDisplay(upDisplay){
      if (upDisplay) this.secDisplay.textContent = upDisplay;
    }


};

export default Display;
