'use strict';
(function() {
var getSimpleMode = function() {
document.getElementById('ingeneer').classList.add("display--none");
};
var getEngMode = function(){
document.getElementById('ingeneer').classList.remove("display--none");
};

function changeMode(elem) {
	this.eng = function() {getEngMode();};
	this.simple = function() {getSimpleMode();};
	var self = this;
	elem.onclick = function(e) {
		var target = e.target;
		var action = target.getAttribute('data-mode');
		if (action) {
			self[action]();
		}
	};
};
new changeMode(submenu__list);
}());
