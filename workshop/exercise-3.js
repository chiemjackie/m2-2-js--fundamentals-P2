// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

const greater = function(num1, num2) {
  return Math.max(num1, num2);
}
console.log(`3.1 ${greater(25,50)} is the largest number`);

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

const moreIntegers = greater(greater(25,50), greater(12,20));
console.log(`3.2 ${moreIntegers} is the largest number`);

// Q3.3
// Would this work with more integers?

// More integers in the 'greater' function would not work unless we change the function
// (e.g. greater(25,30,35,40) is not accommodated).
// You can keep adding on function calls like in 3.2, but the more you add,
// the uglier it gets.