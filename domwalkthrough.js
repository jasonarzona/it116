console.dir(document);

// gives the domain of webpage
console.log(document.domain);

// gives url of the webpage
console.log(document.URL);

// the document attribute can access different elements

console.log(document.title);

// if we want to know the doctype then use this code
console.log(document.doctype);

// shows everything in the head element
console.log(document.head);

// same as the comment above
console.log(document.body);

// all is deprecated but still works
console.log(document.all);

// shows specific section of index
console.log(document.all[10]);

// allows us to go in and change a particular thing through JS
document.all[10].textContent = "I just changed the header";