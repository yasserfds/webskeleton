var choice, num_1, num_2;

function add(P, Q) {
  return P + Q;
}

function substract(P, Q) {
  return P - Q;
}

function multiply(P, Q) {
  return P * Q;
}

function divide(P, Q) {
  return P / Q;
}

console.log("Please select the operation.");
console.log("a. Add");
console.log("b. Substract");
console.log("c. Multiply");
console.log("d. Divide");
choice = input("Please enter choice (a/b/c/d): ");
num_1 = Number.parseInt(input("Please enter the first number: "));
num_2 = Number.parseInt(input("Please enter the second number: "));

if (choice === "a") {
  console.log(num_1, " + ", num_2, " = ", add(num_1, num_2));
} else {
  if (choice === "b") {
    console.log(num_1, " - ", num_2, " = ", substract(num_1, num_2));
  } else {
    if (choice === "c") {
      console.log(num_1, " * ", num_2, " = ", multiply(num_1, num_2));
    } else {
      if (choice === "d") {
        console.log(num_1, " / ", num_2, " = ", divide(num_1, num_2));
      } else {
        console.log("This is an invalid input");
      }
    }
  }
}
