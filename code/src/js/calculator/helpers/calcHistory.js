'use strict';
function calcHistory(UpperDisp, container) {
	console.log('Функция подключена');
let history = document.getElementById(container).getElementsByClassName('history-list')[0];
let result = `${UpperDisp.UoldNum}${UpperDisp.UcalcOperator}${UpperDisp.UcurrNum}${UpperDisp.Uproc}=${UpperDisp.UresNum}`;
let getListLi = document.createElement('li');
getListLi.innerHTML = result;
history.appendChild(getListLi);
};
module.exports = calcHistory;
