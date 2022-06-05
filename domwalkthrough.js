// console.dir(document);

// // gives the domain of webpage
// console.log(document.domain);

// // gives url of the webpage
// console.log(document.URL);

// // the document attribute can access different elements

// console.log(document.title);

// // if we want to know the doctype then use this code
// console.log(document.doctype);

// // shows everything in the head element
// console.log(document.head);

// // same as the comment above
// console.log(document.body);

// // all is deprecated but still works
// console.log(document.all);

// // shows specific section of index
// console.log(document.all[10]);

// // allows us to go in and change a particular thing through JS
// document.all[10].textContent = "I just changed the header";

// //this goes through the tree to see which element is the form and displays in the console window
// console.log(document.forms);

// //same as above
// console.log(document.images);

// //same
// console.log(document.links);

///////////////////////
//GetElementByID

// console.log(document.getElementById('header-title'));

// //
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// headerTitle.textContent = "Changed the Title again"
// headerTitle.innerText = "Hello, changed you again"

// headerTitle.style.color = "hotpink";

//////////////////////////////////////
/////////////////GetElementByClassName

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);

//this makes us style the 2nd item in the array referencing them by the index
// items[1].style.fontWeight = 'bold';
// items[1].textContent = 'asdfkljghaslkf';
// items[1].style.color = 'green';

// items[0].style.fontWeight = 'bold';
// items[0].textContent = 'deez';
// items[0].style.color = 'brown';

// items[2].style.fontWeight = 'bold';
// items[2].textContent = 'nuts';
// items[2].style.color = 'red';
// items[2].style.backgroundColor = 'blue';

//creates a for loop until a condition is met then stops 
// for(let i = 1; i <=10; i++ ){
//     console.log(i);
// }

// //same as above but += is in increments of 2
// for (let i = 1; i <=20; i+=2){
//     console.log(i);
// }

// //same as above but -= is in decrements of 2
// for (let i = 100; i >= 0; i-=2){
//     console.log(i);
// }

// //[this bracket creates an array btw]
// //lets us call an array????
// const deezNuts = ['Snacky', 'Scary', 'Lily', 'Itty','Bitty','Titty', 'Committee'];

// for (let i = 0; i < deezNuts.length; i ++){
//     console.log(i,deezNuts[i]);
// }

// //lets us use a for loop to edit all the items automatically
// for (var i =0; i < items.length; i ++){
//     items[i].style.backgroundColor = 'black';
//     items[i].style.color = 'white';
//     items[i].textContent = 'Changing the list items';
// }


///////////////////////////////////////////////
/////// GetElementsByTagName

// //lets us edit a code using index and variables
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = "Good Morning, Starshine";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green'
// li[1].style.color = 'white'

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgrey'
//     li[i].textContent = "The world says, Hello!"
// }

////////////////////////////////////////////////////
//////////Query Selector:

//created a variable for main-header then made a border
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink'
header.style.border = 'solid 4px hotpink'


//lets us go into the dom to change elements
let input = document.querySelector('input');
input.value = "I just changed my underwear in this input box"