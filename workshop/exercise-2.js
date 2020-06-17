// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  } else {
    console.log(`Numbers are equivalent`);
  }
}

// Call the function
max(12, 43);
max(35, 10);
max(25, 25);
