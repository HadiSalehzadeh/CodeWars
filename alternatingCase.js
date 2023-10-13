/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
*/

String.prototype.toAlternatingCase = function() {
  let newStr = '';
  for (let i = 0; i < this.length; i++) {
    this[i].toLowerCase() === this[i] ? newStr += this[i].toUpperCase() : newStr += this[i].toLowerCase();
  }
  return newStr;
};

console.log(toAlternatingCase("hello WORLD"))
console.log(toAlternatingCase("HeLLo WoRLD"))
console.log(toAlternatingCase(12345))