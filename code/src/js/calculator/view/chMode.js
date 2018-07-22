'use strict';
import CalcFactory  from '../CalcFactory/calcFactory.js';

var getSimpleMode = function(container) {
	var closeIngPanels = ()=>{
			var additionalKeysBlock = document.getElementById(container).getElementsByClassName("additionalKeysBlock")[0];
				let elem = additionalKeysBlock.querySelector('div');
				if(elem){additionalKeysBlock.removeChild(elem);};
};
	closeIngPanels();
	CalcFactory.makeSimple(container);
};
var getEngMode = function(container){
	CalcFactory.makeIngenering(container);
};

function changeMode(container) {
	let elem = document.getElementById(container).getElementsByClassName('submenu__mode')[0];
	this.eng = function() {getEngMode(container);};
	this.simple = function() {getSimpleMode(container);};
	var self = this;
	elem.onclick = function(e) {

		var target = e.target;
		var action = target.getAttribute('data-mode');
		if (action) {
			self[action]();
		}
	};
};
export default changeMode;
