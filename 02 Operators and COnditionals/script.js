// Question 1.) Get user to input a number using prompt(Enter a number: ).Check if the number is a multiple of 5 or not.
/*
var x = prompt("Enter a number: ");
if(x % 5 === 0) alert("Congratulations! The number is divisible by 5.");
else alert("Ooh! The number is not divisible by 5.");
*/


// Question 2.) Write a code which can give student grade according to their score.
// 80-90 {A}
// 70-89 {B}
// 60-69 {C}
// 50-59 {D}
// 0-49 {F}

var x = prompt("Enter your marks: ");
if(x >= 80 && x <= 90) alert("Congratulations! you got 'A' Grade.");
else if(x >= 70 && x <= 89) alert("Hey! you got 'B' Grade.");
else if(x >= 60 && x <= 69) alert("Hey! you got 'C' Grade.");
else if(x >= 50 && x <= 59) alert("Hey! you got 'D' Grade.");
else alert("You got 'F' Grade.")