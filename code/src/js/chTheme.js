	(function() {
		'use strict';
var getCalcLight = function() {
	document.getElementById('calculator').classList.add("calculator--theme-light");
	};
var getCalcDark = function(){
	document.getElementById('calculator').classList.remove("calculator--theme-light");
};

function changeTheme(elem) {
    this.dark = function() {getCalcDark();};
    this.light = function() {getCalcLight();};
    var self = this;
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-theme');
      if (action) {
        self[action]();
      }
    };
  };
	new changeTheme(submenu__radios);
	}());
