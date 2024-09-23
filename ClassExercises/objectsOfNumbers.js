function getNumberOccurrences(arrayOfNumbers) {
    let numberObject = {};
    for (let index of arrayOfNumbers) {
        if (index in numberObject) {
            numberObject[index] += 1;
        } else {
            numberObject[index] = 1;
        }
    }
    return numberObject;
}

module.exports = { getNumberOccurrences };