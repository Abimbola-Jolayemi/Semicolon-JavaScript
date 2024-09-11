function reverse_array(numbers){
	let array_reversed = []

	for(let index = 0; index < numbers.length; index++){
		array_reversed[index] = numbers[numbers.length - 1 - index];
	}
	return console.log(array_reversed)
}
reverse_array([1, 2, 3, 4, 5])