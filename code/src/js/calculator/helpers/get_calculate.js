"use strict";

var cache = {};
function getCalculate(op1, op2, operator, proc) {
	let res;
	console.log(operator);
 	if(operator){
    switch (operator) {
     case "plus": 	  if(proc){res = op1 + ((op1/100)*op2);}else{res = op1 + op2;}return res;console.log(res);
     case "minus":  if(proc){res = op1 - ((op1/100)*op2);}else{res = op1 - op2;}return res;
     case "times":  if(proc){res = op1 * ((op1/100)*op2);}else{res = op1 * op2;}return res;
     case "divide": if(proc){res = op1 / ((op1/100)*op2);}else{res = op1 / op2;}return res;
     case "sqrt": res = Math.sqrt(op1); return res;
     case "pow2": res = Math.pow(op1, 2); return res;
     case "powten": res = Math.pow(10, op1); return res;
     case "pow3": res = Math.pow(op1, 3); return res;
     case "root3": res = Math.cbrt(op1); return res;
     case "powY": res = Math.cbrt(op1); return res;
     case "tan": res = Math.tan(op1); return res;
     case "log": res = Math.log10(op1); return res;
     case "ln": res = Math.log(op1); return res
     case "sin": res = Math.sin(op1); return res;
     case "cos": res = Math.cos(op1); return res;
     case "opReverse": res = opReverse(op1); return res;
     case "factorial": res = factorial(op1); return res;
     default: res = 0;
   }
   return res;
 }
};
function factorial(op1){
  const Memoize = (fn) => {
      return (...args) => {
        let n = args[0];
        if (n in cache) {
          console.log('Fetching from cache', n);
          return cache[n];
        }
        else {
          console.log('Calculating result', n);
          let result = fn(n);
          cache[n] = result;
          return result;
        }
      };
    };
    const GetFactorial = Memoize(
      (x) => {
        if (x === 0) {
          return 1;
        }else {
          return x * factorial(x - 1);
        }
      }
    );
  let res = GetFactorial(op1);
  return res;
 };
function opReverse(op1){
 	console.log('reverse1');
  let res;
 	let op = Math.sign(op1);
   switch (op) {
   	case 1: res = parseFloat("-" + op1); return res; break;
   	case -1: res = Math.abs(op1); return res; ;break;
   	case 0: res = 0; return res; break;
   	case -0: res = 0; return res; break;
   	default: return op1;
   }
  };
export default getCalculate;
