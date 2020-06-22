/******************
 * YOUR CODE HERE *
 ******************/


let userInput = getInput(0) + getInput(1) + getInput(2)
let str1 = getInput(0);
let str2 = getInput(1);
let str3 = getInput(2);

function calculate( str1, str2, str3){ 
if ( str3 === '+' 
|| str3 === "plus" 
|| str3 === 'added to'
){ return str1*1 + str2*1}

else if ( str3 === '-'
|| str3 === 'minus'
|| str3 === 'subtracted from'
){ return str1*1 - str2*1}

else if ( str3 === "x"
|| str3 === 'X'
|| str3 === 'times'
|| str3 === 'multiplied by'
){return str1*1 * str2*1}

else if( str3 === '/'
|| str3 == 'divided by'
){ return str1*1 / str2*1
}

else if (str3 === "%"
|| str3 === "modulus"
|| str3 === 'mod'
){ return str1*1 % str2*1
}

else if (str3 !=='+' 
|| str3 !== "plus" 
|| str3 !== 'added to'
|| str3 !== 'minus'
|| str3 !== 'subtracted from'
|| str3 !== "x"
|| str3 !== 'X'
|| str3 !== 'times'
|| str3 !== 'multiplied by'
|| str3 !== '/'
|| str3 !== 'divided by'
|| str3 !== "%"
|| str3 !== "modulus"
|| str3 !== 'mod'
){ return "Sorry, that's not a mathematical operation!" }
}


let result = calculate('4',  "8", "h",)
console.log(result);



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}

function getInput(i) {
  return process.argv[i + 2];
}

module.exports = calculate;