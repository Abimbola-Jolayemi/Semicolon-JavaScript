function add(num1, num2){
	let result = num1 + num2;
	return result;
};

function subtract(num1, num2){
	return num2 - num1;
}

function evenNumbers(numbers){
	newArray = []
	for (let number of numbers){
		if(number % 2 == 0){
			newArray.push(number)
		}
	}
	return newArray
}

function sumEvenNumbers(arrayOfNumbers){
	let sum = 0;
	for(let number in arrayOfNumbers){
		if(number  % 2 == 0){
			sum += number;
		}
	}
	return sum;
}


module.exports = {add, subtract, evenNumbers, sumEvenNumbers};