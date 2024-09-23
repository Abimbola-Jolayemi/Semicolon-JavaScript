function returnSum(numbers){
    let size = numbers.length;
    let new_array = [];
    if(numbers.length % 2 == 0){
        for(let index = 0; index < size; index+=2){
            let sum = numbers[index] + numbers[index + 1];
            new_array.push(sum)
        }
    } else if(numbers.length % 2 != 0){
        for(let index = 0; index < size - 1; index+=2){
            let sum = numbers[index] + numbers[index + 1];
            new_array.push(sum)
        }
        new_array.push(numbers[size - 1])
    }
    
    return new_array;
}

// console.log(returnSum([1, 2, 3, 4, 5, 6, 7]));
// console.log(returnSum([2, 3, 4, 5, 6, 7]));

module.exports = {returnSum};