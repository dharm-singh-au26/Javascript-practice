/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

const markWeight = 72;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;
const johnHigherBMI = johnBmi > markBmi;

if (markHigherBMI > johnHigherBMI) {
  console.log(`Mark BMI ${markBmi} is Higher then John BMI ${johnBmi} `);
} else {
  console.log(`John BMI ${johnBmi}  is Higher then Mark BMI ${markBmi}  `);
}
