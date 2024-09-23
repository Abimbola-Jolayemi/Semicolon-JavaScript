const {checkStudentsScores, addFiveToScores, returnSquareOfNumbers, distributeBooks, getAfternoonTimings, calculateTotalExpense} = require("./arrayMethods");

test("test that return scores greater than or equal to 70", ()=>{
    let scores = [60, 20, 84, 70, 59, 92]
    let result = checkStudentsScores(scores)
    expect(result).toEqual([84, 70, 92])
})

test("test for students scores plus 5", ()=>{
    let scores = [60, 20, 84, 70, 59, 92]
    let result = addFiveToScores(scores)
    expect(result).toEqual([65, 25, 89, 75, 64, 97])
})

test("test that returns square of numbers in an array", () =>{
    let numbers = [2, 4, 6, 8, 10];
    let result = returnSquareOfNumbers(numbers)
    expect(result).toEqual([4, 16, 36, 64, 100])
})

test("test that returns an object of books distribution", () => {
    let names = ["Emily", "Jane", "Jordan", "Annabelle"];
    let books = ["Java Dietel", "Python Dietel", "Eloquent Javascript", "TDD Textbook"];
    let result = distributeBooks(names, books);
    let expected = {
        "Emily": "Java Dietel",
        "Jane": "Python Dietel",
        "Jordan": "Eloquent Javascript",
        "Annabelle": "TDD Textbook"
    };
    expect(result).toEqual(expected);
});


test("test that afternoon class timings can be gotten", ()=>{
    let timings = ["9:00 AM", "11:00 AM", "1:00PM", "3:00PM", "5:00PM"]
    let result = getAfternoonTimings(timings)
    let expected = ["1:00PM", "3:00PM", "5:00PM"]
    expect(result).toEqual(expected);
})

test("test that calculates expenses", ()=>{
    let expenses = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    }
    let result = calculateTotalExpense(expenses)
    expect(result).toBe(380)
})