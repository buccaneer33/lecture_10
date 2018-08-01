function getOperandChar(operator) {
	let result;
	if(operator){
	  switch (operator) {

						 case "plus": result = "+"; break;
							case "minus": result = "-"; break;
							case "times": result = "*"; break;
							case "divide": result = "/"; break;
							case "proc": result = "%"; break;
							case "sqrt": result = "&radic;"; break;
							case "pow2": result = "&#178;"; break;
							case "pow3": result = "&#179;"; break;
							case "powten": result = "&#739;"; break;
							case "root3": result = "&#8731;"; break;
							case "powY": result = "&#696;"; break;
							case "rootY": result = "&#696;&#8730;"; break;
							case "tan": result = "tan"; break;
							case "fact": result = "!"; break;
							case "cos": result = "cos"; break;
							case "log": result = "log"; break;
							case "sin": result = "sin"; break;
							case "ln": result = "ln"; break;

							default:   result = '&nbsp';
	  }
  return result;
	}
};

export default getOperandChar;
