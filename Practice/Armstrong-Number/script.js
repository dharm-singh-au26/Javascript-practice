/*
3. Ask a number input from the user, and display a message if the entered number 
is an Armstrong number.
Ex: 1^3 + 5^3 + 3^3 = 153
*/

const number = parseInt(
  prompt("Enter Number for checking it is armstrong or not")
);

let sum = 0;

// create a temporary variable

let temp = number;

while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;

  // remover last digit form number

  temp = parseInt(temp / 10);
}

// check the condition

if (sum == number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
