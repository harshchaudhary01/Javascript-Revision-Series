// Question 1.) For a given array with marks of 5 students, find the average marks of the entire class.
/*
let marks = [98,76,54,72,34];
let avgMarks = 0;
for(let i of marks) avgMarks += i;
console.log(`The average marks of the entire class is: ${avgMarks}`);

for(let i of marks){
    console.log(i);
}

*/

// Question 2.) Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// a.) Remove the first company from the array.
// b.) Remove Uber and add Ola in its place.
// c.) Add Amazon at the end.

var companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//                                    Answer (a.)
/*
companies.splice(0,1);
for(let i of companies) console.log(i);
*/

//                                    Answer (b.)
/*
companies.splice(2,1,"Ola");
for(let i of companies) console.log(i);
*/

//                                    Answer (c.)
/*
companies.splice(6,0,"Amazon");
for(let i of companies) console.log(i);
*/
