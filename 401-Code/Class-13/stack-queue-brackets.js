"use strict";
const Stack = require("./Stack");


function validateBrackets(string) {
 
  let stack = new Stack();

  let arr = string.split("");


  let characters = [];
  arr.forEach((item) => {
 
    if (item == "{" || item == "[" || item == "(") {
     
      stack.push(item);
    }
   
    else if (item == "}" && stack.peek() == "{") {
      stack.pop();
   
    } else if (item == "]" && stack.peek() == "[") {
      stack.pop();
 
    } else if (item == ")" && stack.peek() == "(") {
      stack.pop();
    
    }
    
    else {
      characters.push(item);
    }
  });


  if (
    stack.peek() ||
    characters.includes("}") ||
    characters.includes("]") ||
    characters.includes(")")
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBrackets;