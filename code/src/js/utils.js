"use strict";
 var sum = function (op1, op2){
	var res = op1 + op2;
	return res;
};
 var minus = function (op1, op2){
		var res = op1 - op2;
		return res;
	};
var times = function (op1, op2){
		var res = op1 * op2;
		return res;
};
var divide = function divide(op1, op2){
		var res = op1 / op2;
		return res;
	};
	module.exports = {sum, minus, times, divide};
	/*
export function reverse(op1){
		return reverse = op1 / op2;
	};
export function root(op1){
		return root = op1 / op2;
	};*/
