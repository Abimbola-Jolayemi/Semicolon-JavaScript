const{returnSum} = require("./fireDrill3.js");

test("return array of sum of digits in an array", ()=>{
    let arrayOfNumbers = [2, 3, 4, 5, 6, 7]
    let expectedResult = returnSum(arrayOfNumbers);
    expect(expectedResult).toEqual([5, 9, 13])
})

test("return array of sum of digits in an array of odd lenth", ()=>{
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7]
    let expectedResult = returnSum(arrayOfNumbers);
    expect(expectedResult).toEqual([3, 7, 11, 7])
})