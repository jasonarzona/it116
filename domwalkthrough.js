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

// // shows everything in the body
// console.log(document.body);

// // all is deprecated but still works
// console.log(document.all);

// // shows specific section of index
// console.log(document.all[10]);

// // allows us to go in and change a particular thing through JS
// document.all[10].textContent = "I just changed the header";

// //this goes through the tree to see which element is the form and displays in the console window
// console.log(document.forms);

// //same as above but images
// console.log(document.images);

// //same as above but links
// console.log(document.links);

// /////////////////////////////
// //////////GetElementByID

// //this lets us edit whatever is in the header-title id
// console.log(document.getElementById('header-title'));

// // "let" assigns a variable to headerTitle. In this case it assigned the code above that lets us edit whatever is in the header-title id
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// //we changed the text in this block of code
// headerTitle.textContent = "Changed the Title again"
// headerTitle.innerText = "Hello, changed you again"
// headerTitle.style.color = "hotpink";

////////////////////////////////////
///////////////GetElementByClassName

// // we did the same thing as above but by class instead of id
// var items = document.getElementsByClassName('list-group-item');

// //shows everything in the items element through the console
// console.log(items);

// //this makes us style the 2nd item in the array referencing them by the index
// items[1].style.fontWeight = 'bold';
// items[1].textContent = 'asdfkljghaslkf';
// items[1].style.color = 'green';

// //this makes us style the 1st item in the array referencing them by the index
// items[0].style.fontWeight = 'bold';
// items[0].textContent = 'deez';
// items[0].style.color = 'brown';

// //this makes us style the 3rd item in the array referencing them by the index
// items[2].style.fontWeight = 'bold';
// items[2].textContent = 'nuts';
// items[2].style.color = 'red';
// items[2].style.backgroundColor = 'blue';

// //creates a for loop until a condition(i<=10) is met then stops 
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
// // const makes it so that deezNuts cannot be reassigned. It will always be 'Snacky', 'Scary', 'Lily', 'Itty','Bitty','Titty', 'Committee'
// const deezNuts = ['Snacky', 'Scary', 'Lily', 'Itty','Bitty','Titty', 'Committee'];

// //this block of code will show the contents of deezNuts and their index
// for (let i = 0; i < deezNuts.length; i ++){
//     console.log(i,deezNuts[i]);
// }

// //lets us use a for loop to edit all the items automatically at the same time
// for (var i =0; i < items.length; i ++){
//     items[i].style.backgroundColor = 'black';
//     items[i].style.color = 'white';
//     items[i].textContent = 'Changing the list items';
// }


/////////////////////////////////////////////
///// GetElementsByTagName

// //lets us edit a code using index and variables
// var li = document.getElementsByTagName('li');

// //shows the contents of li in the console
// console.log(li);

// //shows the contents of the second li item
// console.log(li[1]);

// //lets us edit the contents in the second li item
// li[1].textContent = "Good Morning, Starshine";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green'
// li[1].style.color = 'white'

// //lets us edit everything with the li element at the same time. similar to what we did above
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgrey'
//     li[i].textContent = "The world says, Hello!"
// }

// ////////////////////////////////////////////////////
// //////////Query Selector:

// //created a variable for main-header then made a border
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px hotpink'
// header.style.border = 'solid 4px hotpink'


// //lets us go into the dom to change elements
// let input = document.querySelector('input');
// input.value = "I just changed my underwear in this input box"