function checkStudentsScores(testScores){
    return testScores.filter((score) => {
        return score >= 70
    })
}

function addFiveToScores(scores){
    return scores.map((score) => {
        return score + 5
    })
}

function returnSquareOfNumbers(numbers){
    return numbers.map((number) => {
        return number ** 2
    })
}

function distributeBooks(names, books) {
    let distributedBooks = {};
    for (let index of names.keys()) {
        distributedBooks[names[index]] = books[index];
    }
    return distributedBooks;
}

function getAfternoonTimings(timingList) {
    let afternoonTimeList = ["12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];
    return timingList.filter((time) => {
        return afternoonTimeList.includes(time);
    });
}

function calculateTotalExpense(expenses){
    let sum = 0;
    for(let values in expenses){
        let expenseValue = expenses[values]
        sum = sum + expenseValue
    }
    return sum
}

let expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
}

module.exports = {checkStudentsScores, addFiveToScores, returnSquareOfNumbers, distributeBooks, getAfternoonTimings, calculateTotalExpense};