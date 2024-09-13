const{sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate} = require("./fireDrill.js");

test("return sum of even numbers in an array", () =>{
	let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(30);

	arrayOfNumbers = [10, 11, 12, 13, 14, 15];
	result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(36);
});

test("return largest number in an array", ()=>{
	let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let result = findMax(numberArray);
	expect(result).toBe(10);
})

test("return number of odd numbers in an array", ()=>{
	let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	expect(countOddNumbers(arrayOfNumbers)).toBe(5);
})

test("return true if number is a prime number, otherwise, return false", ()=>{
	expect(isPrime(3)).toBe(true);
	expect(isPrime(10)).toBe(false);
	expect(isPrime(2)).toBe(true);
	expect(isPrime(1)).toBe(true);
})

test("return first duplicate number in an array", ()=>{
	let arrayOfNumbers = [1, 2, 4, 2, 5, 6, 7, 4, 7];
	expect(findFirstDuplicate(arrayOfNumbers)).toBe(2);
})
