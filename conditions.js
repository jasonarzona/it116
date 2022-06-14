// //kinda self-explanatory tbh
// console.log("Hello, Bitch");

// //basically a random number generator between 0.0 to 1
// let randomNumber = Math.random();

// //if generates a number below 0.5, it will show in the console saying "Condition was met"
// if (randomNumber < 0.50) {
//     console.log("Condition was met");
//     console.log(randomNumber);
// }

// //if generates a number greater than or equal to .5, it will show in the console saying "Condition was met"
// if (randomNumber >= 0.5){
//     console.log("Condition was met");
//     console.log(randomNumber);
// }

// //this block of code creates an if condition where if met, will show the respective condition in the console. ex. if dayofweek is equal to "Monday", it will show "Yay it's Monday" in the console log
// const dayOfWeek = 'Saturday';

// if (dayOfWeek === 'Monday') {
//     console.log("Yay it's Monday");
// } else if (dayOfWeek === "Friday"){
//     console.log("Yay its Friday");
// } else if (dayOfWeek === "Saturday"){
//     console.log("You have the correct day from the variable");
// }

// //prompts us to input a number for age
// const age = prompt("Enter an age");

// //this block of code has conditions that print a string in the console if conditions are met. if the age inputted is < 5, it will say "You jus a baby". if no other conditions are not met then it will show "You old mf"
// if (age < 5){
//     console.log("You jus a baby");
// } else if (age < 10){
//     console.log("You jus a kid");
// } else if (age < 35){
//     console.log ("You jus a old baby")
// }
// // IF ALL OTHER CONDITIONS FAIL - ELSE
// else {
//     console.log("You old mf");
// }

// //switch statement
// const fruit = "Bitch";

// //basically a cleaner version of if conditions. kind of self explanatory in my opinion
// switch (fruit){

//     case "Oranges":
//         console.log("Oranges are orange");
//         break;
//     case "Bananas":
//         console.log("Bananas are mellow");
//         break;
//     case "Apples":
//         console.log("Apples are bead");
//         break;
//     case "Lychee":
//         console.log("Lychees are cool");
//         break;
//     default:
//         console.log("No matches bitch. Your conditions are ass");
// }

// //in this if statement that prompts us to input a password, we made it so that if there are spaces in the password we get an error message basically and if it is a good password then we valid
// //if it meets the length requirements, then we get a valid notification, if it is too short then we get an "error" message
// const password = prompt("Enter a new password, bitch");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1 ) {
//         console.log("U valid, fam");
//     } else {
//         console.log("Password can't have spaces, idiot");
//     }
// } else {
//     console.log("Password is too short like you");
// }

// //sings the song Doe boy fresh by three six mafia when we call the function
// function singSong(){
//     console.log("Doe");
//     console.log("Boy");
//     console.log("Doe");
//     console.log("Doe");
//     console.log("Doe");
//     console.log("Boy");
//     console.log("Fresh");
// }

// singSong()

// // ` = creates a template literal? $ = expression placeholder?
// // lets us use a function to greet someone using their first and last name when we add it into the function 
// function greet1(firstName,lastName){
//     console.log(`Hey there, ${firstName} ${lastName}`)
// }

// // greet1("Lil Bitch", "Boy");
// greet1("Ash","Ketchum");