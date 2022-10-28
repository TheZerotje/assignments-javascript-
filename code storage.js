echo "# Assignment-Javascript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TheZerotje/Assignment-Javascript.git
git push -u origin main

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
let array1 = [1, 5, 6, 9, 10, 14];
let lastElement = array1[array1.length - 1];

console.log(lastElement);

// add 16 and 3 to array1
let array1 = [1, 5, 6, 9, 10, 14];
 
array1.push(16);
array1.push(3);

// sort the array, then print the 3rd element again
// did it change?

const array1 = [1, 5, 6, 9, 10, 14];

array1.push(16);
array1.push(3);
 
array1.sort(); 
array1.sort(function(a, b){return a - b});
let lastElement = array1[array1.length - 6];


console.log(array1);
console.log(lastElement);

// create a variable called myTodoList that holds an empty array
${$arrayname}+='myTodoList'

// add three todo items to the array using a built-in array method

// remove the second item in the array

// create another array, yourTodoList, and add two todo items

// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList


// sort the following array from Z-A

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
