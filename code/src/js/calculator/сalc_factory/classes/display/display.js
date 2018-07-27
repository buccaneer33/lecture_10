'use strict';

class Display {
    constructor (container) {
        this.primDisplay = container.querySelector('.calculator__display');
        this.secDisplay  = container.querySelector('.calculator__display-upper');
        this.histDisplay = container.querySelector('.history-list');
    };

    updateDisplay ({display, upDisplay}) {
        if (display === 0) this.primDisplay.textContent = '0';
        if (display) this.primDisplay.textContent = display;
        if (upDisplay) this.secDisplay.textContent = upDisplay;
    };
};

export default Display;
