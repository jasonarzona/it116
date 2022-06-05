//lets us edit a code using index and variables
var li = document.getElementsByTagName('li');

//shows the contents of li in the console
console.log(li);

//shows the contents of the second li item
console.log(li[1]);

//lets us edit the contents in the second li item
li[1].textContent = "Good Morning, Starshine";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green'
li[1].style.color = 'white'

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'lightgrey'
    li[i].textContent = "The world says, Hello!"
}