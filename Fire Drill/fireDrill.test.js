const{sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate, reverseArray, factorial, isPalindrome, sumMultiplesOf3And5, isLeapYear} = require("./fireDrill.js");

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
	let arrayOfNumbers = [0, 2, 4, 2, 5, 6, 7, 4, 4, 7];
	expect(findFirstDuplicate(arrayOfNumbers)).toBe(2);

	arrayOfNumbers = [10, 11, 12, 13, 14, 15];
	expect(findFirstDuplicate(arrayOfNumbers)).toBe(-1);
})

test("reverse array", ()=>{
	let arrayOfNumbers = [0, 2, 4, 2, 5];
	let result = reverseArray(arrayOfNumbers);
	expect(result).toStrictEqual([5, 2, 4, 2, 0]);
})

test("return factorial of number", ()=>{
	expect(factorial(5)).toBe(120);
})

test("check palindrome in strings", ()=>{
	let word = "racecar";
	let result = isPalindrome(word)
	expect(result).toBe(true)

	word = "Racecar";
	result = isPalindrome(word)
	expect(result).toBe(true)
})

test("sum all the multiples of 3 and 5", ()=>{
	let result = sumMultiplesOf3And5(25);
	expect(result).toBe(15)

	result = sumMultiplesOf3And5(45);
	expect(45)
})

test("isLeapYear", ()=>{
	let result = isLeapYear(2024);
	expect(result).toBe(true);
})

