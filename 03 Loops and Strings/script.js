// Question 1.) Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname lenght. e.g: use name = "harshchaudhary", username should be "@harshchaudhary14"

let x = prompt("Enter your full name: ");
let len = x.length;
let userName = "@"+x+len;
console.log(userName);