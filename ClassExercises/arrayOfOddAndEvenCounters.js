function getEvenAndOddNumbers(numbers){
	let new_array = [];
	let count_odd = 0;
	let count_even = 0;
	for(let index = 0; index < numbers.length; index++){
		if (numbers[index] % 2 == 0){
			count_even++;
		} else {
			count_odd++;
		}
	}
	new_array.push(count_even);
	new_array.push(count_odd);
	return new_array;
}
console.log(getEvenAndOddNumbers([2, 1, 5, 7, 8]));