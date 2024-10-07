// code your solution here
 function saturdayFun(activity="rollerskate"){
    console.log(`This Saturday i want to ${activity}`)

 }
saturdayFun()
saturdayFun("cook for family")

//HOISTING 
//JavaScript's ability to call functions before they appear in the code is called hoisting. For hoisting to work, the function must be defined using a function declaration.
// Hoisting in JavaScript is a behavior where function and variable declarations are moved to the top of their containing scope during the compilation phase, allowing functions to be called before they are actually defined in the code.

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  