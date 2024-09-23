const { getNumberOccurrences } = require("./objectsOfNumbers.js");

test('test should count occurrences of numbers in an array', () => {
    const result = getNumberOccurrences([1, 2, 2, 3, 4, 4, 4]);
    expect(result).toEqual({ 1: 1, 2: 2, 3: 1, 4: 3 });
});