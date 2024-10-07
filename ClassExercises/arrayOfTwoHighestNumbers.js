function returnTwoHighestNumbers(arrayOfNumbers) {
    let firstMaxNumber = 0
    let secondMaxNumber = 0
    let firstMaximumNumber = 0
    let secondMaximumNumber = 0
    let newArray = [];
    for (let index = 0; index < arrayOfNumbers.length; index++){
        if(arrayOfNumbers[index] > firstMaximumNumber){
            firstMaximumNumber = arrayOfNumbers[index]
        }
    }

    firstMaxNumber = firstMaximumNumber
    let indexOfFirstMaxNumber = arrayOfNumbers.indexOf(firstMaxNumber)
    arrayOfNumbers.splice(indexOfFirstMaxNumber, 1)

    for (let index = 0; index < arrayOfNumbers.length; index++){
        if(arrayOfNumbers[index] > secondMaximumNumber){
            secondMaximumNumber = arrayOfNumbers[index]
        }
    }
    secondMaxNumber = secondMaximumNumber

    newArray.push(firstMaxNumber)
    newArray.push(secondMaxNumber)
    return newArray
}

module.exports = {returnTwoHighestNumbers}