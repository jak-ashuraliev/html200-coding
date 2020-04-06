// Create an array, with at least 5 strings
let arr = ['One', 'Two', 'Three', 'Four', 'Five'];
console.log(arr);

// Add an element to the end of the end of the array
arr.push('Adding to the END');
console.log(arr);

// Remove the third element
arr.splice(2, 1);
console.log(arr);

// Create a string from the elements and comma separate them
let str = arr.join(', ');
console.log(str);