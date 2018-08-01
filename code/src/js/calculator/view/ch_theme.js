'use strict';

var getCalcLight = function(container) {
	document.getElementById(container).classList.add("calculator--theme-light");
	};
var getCalcDark = function(container){
	document.getElementById(container).classList.remove("calculator--theme-light");
};




	function changeTheme(container) {

			let elem = document.getElementById(container).getElementsByClassName('submenu__theme');
			let click;

					for (let i = 0;  i < elem.length; i++) {
						let radio = elem[i];
						radio.addEventListener('click', ()=>{click = radio.getAttribute('data-theme');
						if(click=='dark'){getCalcDark(container)}
						else if(click=='light'){getCalcLight(container)}
					});
					}




	  };

export default changeTheme;
