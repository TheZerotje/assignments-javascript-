const array1 = [1, 5, 6, 9, 10, 14];

array1.push(16);
array1.push(3);
 
array1.sort(); 
array1.sort(function(a, b){return a - b});

console.log(array1);
console.log(lastElement);