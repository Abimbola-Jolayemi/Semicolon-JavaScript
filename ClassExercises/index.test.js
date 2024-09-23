const {add, subtract, evenNumbers, sumEvenNumbers} = require("./index.js");
let number1 = 2;
let number2 = 29;

test("Add two numbers", ()=>{
	let result = add(number1, number2);
	expect(result).toBe(31)
});

test("Sutract two numbers", ()=>{
	let result = subtract(number1, number2);
	let expected = 27;
	expect(result).toBe(expected);
});

test("return even numbers", ()=>{
	let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
	expect(evenNumbers(arrayOfNumbers)).toEqual([2, 4, 6]);
})

test("return sum of even numbers in an array", () =>{
	let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(30);
})