const{returnTwoHighestNumbers} = require("./arrayOfTwoHighestNumbers")

test("return an array of two highest numbers in an array of numbers", () =>{
    let array = [2, 3, 5, 1, 7]
    let result = returnTwoHighestNumbers(array)
    expect(result).toEqual([7, 5])
})

test("return an array of two highest numbers in an array of numbers", () =>{
    let array = [1, 9, 3, 4, 8]
    let result = returnTwoHighestNumbers(array)
    expect(result).toEqual([9, 8])
})