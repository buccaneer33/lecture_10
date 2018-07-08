"use strict";
 var sum = function (op1, op2, proc){
	 if(proc){var res = op1 + ((op1/100)*op2);
	 }else{var res = op1 + op2;}
	return res;};
/**********/
 var minus = function (op1, op2, proc){
	 if(proc){var res = op1 - ((op1/100)*op2);
	 }else{var res = op1 - op2;}
		return res;};
	/**********/
var times = function (op1, op2, proc){
	if(proc){var res = op1 * ((op1/100)*op2);
	}else{var res = op1 * op2;}
		return res;};
/**********/
var divide = function (op1, op2, proc){
	if(proc){	var res = op1 / ((op1/100)*op2);
	}else{var res = op1 / op2;}
		return res;};
	/**********/
var sqrt = function (op1){ var res = Math.sqrt(op1); return res; };
	/**********/
var pow2 = function (op1){ var res = Math.pow(op1, 2); return res; };
/**********/
var powten = function (op1){ var res = Math.pow(10, op1); return res; };
/**********/
var pow3 = function (op1){ var res = Math.pow(op1, 3); return res; };
/**********/
var root3 = function (op1){ var res = Math.cbrt(op1); return res; };
/**********/
var powY = function (op1, op2){ var res = Math.pow(op1, op2); return res; };
/**********/
var factorial = function (op1){ var res = op1 ? op1 * factorial(op1 - 1) : 1; return res; };
/**********/
var tan = function (op1){ var res = Math.tan(op1); return res; };
/**********/
var cos = function (op1){ var res = Math.cos(op1); return res; };
/**********/
var sin = function (op1){ var res = Math.sin(op1); return res; };
/**********/
var ln = function (op1){ var res = Math.log(op1); return res;};
/**********/
var log = function (op1){ var res = Math.log10(op1); return res;	};
/**********/


	module.exports = {sum, minus, times, divide, sqrt, pow2, powten, pow3, root3,  powY, factorial, tan, cos, sin, log, ln};
