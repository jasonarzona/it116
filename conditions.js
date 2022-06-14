// console.log("Hello, Bitch");


// let randomNumber = Math.random(); //0.0-1

// //
// // if (randomNumber < 0.50) {
// //     console.log("Condition was met");
// //     console.log(randomNumber);
// // }

// //
// if (randomNumber >= 0.5){
//     console.log("Condition was met");
//     console.log(randomNumber);
// }

// //
// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday') {
//     console.log("Yay it's Monday");
// } else if (dayOfWeek === "Friday"){
//     console.log("Yay its Friday");
// } else if (dayOfWeek === "Saturday"){
//     console.log("You have the correct day from the variable");
// }

// const age = prompt("Enter an age");

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

// //in this if statement we made it so that if there are spaces in the password we get an error message basically and if it is a good password then we valid
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

function singSong(){
    console.log("Dope");
    console.log("Boy");
    console.log("Dope");
    console.log("Dope");
    console.log("Dope");
    console.log("Boy");
    console.log("Fresh");
}

singSong()

// ` = creates a template literal? $ = expression placeholder?
function greet1(firstName,lastName){
    console.log(`Hey there, ${firstName} ${lastName}`)
}

greet1("Lil Bitch", "Boy");