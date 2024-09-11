function arraySlice(array, row, columnStart, columnEnd){
	let slicedArray = []

	for(let index = 0; index < columnEnd - columnStart + 1; index++){
		slicedArray[index] = array[row][columnStart + index];
	}
	return slicedArray;
}

let arrayOfNumbers = [
                [200, 50, 300, 5],
                [10, 25, 7, 100],
                [25, 20, 70, 45],
                [500, 170, 11, 35]
        ];	
	let result = arraySlice(arrayOfNumbers, 1, 0, 2);
	console.log(result);