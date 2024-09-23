let array = [1, 2, 3, "home", true]; // Array literal

console.log(array);

let newArray = new Array(3); // Using Array Constructor
newArray[0] = 10;
newArray.push(2);
newArray.push(3);
newArray.push(1);
newArray.push(4);
newArray.push(5);
console.log(newArray);

let result = Array.from("semicolon") // Using the from
console.log(result);
//NOTE: The 'from' function is a function from the Array Constructor. It takes in any iterable, or an array-like structure.

let answer = Array.of(1, 2, 3, 4, 5, 6 , 7, 8, 9, 10)
console.log(answer);
//NOTE: The 'of' function takes in an item in the form of an array.
//NOTE: Pay attention to the 'of' and 'from' function of Array constructor

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
let array_slice = arrayOfNumbers.slice(2, 6);
console.log(array_slice);
//The slice array method start from the start index and stops on the index before the end index. 
//If the end index is not specified, it slices down to the last index in the array.
//We can also use a negative value to slice from the back.E.g
let slice2 = arrayOfNumbers.slice(-3);
console.log(slice2); // prints [5, 6, 7]