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

module.exports = {add, subtract, evenNumbers};