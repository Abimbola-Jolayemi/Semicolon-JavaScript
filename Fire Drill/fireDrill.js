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
		if(number / index){
			return false;
		}
	}
	return true;
}

function findFirstDuplicate(numbers){
	for(let number of numbers){
		for (let index = numbers.indexOf(number)+1; index < numbers.length; index++){
			if(number == numbers[index]){
				return number;
			}
		}
	}
	return -1;
}

module.exports = {sumEvenNumbers, findMax, countOddNumbers, isPrime, findFirstDuplicate}