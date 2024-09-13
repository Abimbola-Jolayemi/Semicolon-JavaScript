function factorial(number){
	if(number <= 1){
		return 1;
	} else{
		return number * factorial(number - 1);
	}
}

function wordLength(word){
	return word.length
}

function splitWord(word){
 let arrayOfChar = []
	for (let char of word){
		arrayOfChar.push(char)
	}
	return arrayOfChar;
}

function ignoreCase(word){
	return word.toUpperCase();
}

function isPalindrome(word){
	let ignorewordcase = word.toLowerCase()
	let forwardArray = []
	let backwardArray = []
	let counter = 0;
		for (let char of ignorewordcase){
			forwardArray.push(char)
		}

	for (let index = (word.length) - 1; index >= 0; index--){
		backwardArray.push(ignorewordcase[index])
	}

	for(let count = 0; count < word.length; count++){
		if(forwardArray[count] == backwardArray[count]){
			counter += 1;
		}
	}
	if (counter = word.length){
		return true;
	} else {
		return false;
	}
	
}


console.log(factorial(5));
console.log(wordLength("Abimbola"))
console.log(splitWord("Abimbola"))

console.log(isPalindrome("racecar"));
console.log(ignoreCase("Abimbola"));