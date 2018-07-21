"use strict";
import CalcFactory  from './CalcFactory/calcFactory.js';
import changeTheme  from './view/chTheme.js';
import changeMode  from './view/chMode.js';
import switchCalcHistBlock from './view/switchCalcHistBlock.js';

function CalcInit(container){

CalcFactory.makeSimple(container);
new changeTheme(container);
new changeMode(container);
new switchCalcHistBlock(container);
};
export default CalcInit;
