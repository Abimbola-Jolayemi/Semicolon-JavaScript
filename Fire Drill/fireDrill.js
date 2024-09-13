function sumEvenNumbers(arrayOfNumbers){
	let sum = 0;
	for(let number of arrayOfNumbers){
		if(number % 2 == 0){
			sum = sum + number;
		}
	}
	return sum;
}

function findMax(arrayOfNumbers){
	let maxNumber = arrayOfNumbers[0];
	for(let number of arrayOfNumbers){
		if(number > maxNumber){
			maxNumber = number;
		}
	}
	return maxNumber;
}

function countOddNumbers(numbers){
	let count = 0;
	for(let number of numbers){
		if(number % 2 == 1){
			count += 1;
		}
	}
	return count;
}

function isPrime(number){
	if(number < 1){
		return false;
	}
	for(let index = 2; index <= number / 2; index++){
		if(number % index == 0){
			return false;
		}
	}
	return true;
}

function findFirstDuplicate(numbers){
	for(let number of numbers){
		for (let index = numbers.indexOf(number) + 1; index < numbers.length; index++){
			if(number == numbers[index]){
				return number;
			}
		}
	}
	return -1;
}

function reverseArray(numbers){
	let new_array = [];
	for(let index = (numbers.length) - 1; index >= 0; index--){
		new_array.push(numbers[index]);
	}
	return new_array;
}

function factorial(number){
	if(number <= 1){
		return 1;
	} else{
		return number * factorial(number - 1);
	}
}

function isPalindrome(word){
	let ignorewordcase = word.toLowerCase()
	let forwardArray = []
	let backwardArray = []
	let counter = 0;
		for (let char of ignorewordcase){
			forwardArray.push(char)
		}

	for (let index = (word.length) - 1; index >= 0; index--){
		backwardArray.push(ignorewordcase[index])
	}

	for(let count = 0; count < word.length; count++){
		if(forwardArray[count] == backwardArray[count]){
			counter += 1;
		}
	}
	if (counter = word.length){
		return true;
	} else {
		return false;
	}
	
}

function sumMultiplesOf3And5(number){
	let sum = 0;
	for(let index = 1; index < number; index++){
		if(index % 3 == 0 && index % 5 == 0){
			sum += index;
		}
	}
	return sum;
}

function isLeapYear(year){
	if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
		return true;
	} else {
		return false;
	}
	
}





module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate,  reverseArray, factorial, isPalindrome, sumMultiplesOf3And5, isLeapYear}