const number = parseInt(
  prompt("Enter a number for checking it is prime or not ")
);

let isPrime = true;
// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

//check if number is less than 1
else {
  console.log("The number is not a prime number.");
}
