function minAndMax(numbers){
	let array_of_numbers = []

	minimum = numbers[0]
	maximum = minimum

	for(let index = 0; index < numbers.length; index++){
		if(numbers[index] < minimum){
			minimum = numbers[index]
		}
		if(numbers[index] > maximum){
			maximum = numbers[index]
		}
	}
		array_of_numbers.push(minimum)
		array_of_numbers.push(maximum)
	return array_of_numbers	
}

console.log(minAndMax([2, 3, 6, 7, 8]))
console.log(minAndMax([5, 3, 6, 9, 8]))