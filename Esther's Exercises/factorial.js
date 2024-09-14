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

function numberIndex(numberString){
	let index = Number(numberString.charAt(0));
	let result = index + 2
	return result;
}

function addNumbersOnOddIndex(cardNumber){
	let total = 0;
	let cardLength = cardNumber.length;
	if(cardLength % 2 == 0){
		cardLength = cardNumber.length - 1;
	} else{
		cardLength = cardNumber.length - 2;
	}

	let result = Number(cardNumber.charAt(cardLength)) + 5

	return result;
}

function isCardTypeValid(cardNumber){
	if(cardNumber.charAt(0) == '4' || cardNumber.charAt(0) == '5' || cardNumber.charAt(0) == '6' || cardNumber.charAt(0) == '3' && cardNumber.charAt(1) == '7'){
		return true;
	} else {
		return false;
	}
}

function cardValidity(cardNumber){
	if (isCardTypeValid(cardNumber) == true){
		if(cardNumber.charAt(0) == '4'){
			return "Visacard";
		} else if (cardNumber.charAt(0) == '5'){
			return "MasterCard";
		} else if (cardNumber.charAt(0) == '3' && cardNumber.charAt(1) == '7'){
			return "American Express Card";
		} else if(cardNumber.charAt(0) == '6'){
			return "Discover cards";
		}
	} else {
		return "Invalid card"
	}
}

console.log(isCardTypeValid("42238"))
console.log(isCardTypeValid("372238"))
console.log(isCardTypeValid("82238"))

console.log(cardValidity("42238"))
console.log(cardValidity("372238"))
console.log(cardValidity("82238"))

console.log(addNumbersOnOddIndex("42238"))
console.log(numberIndex("422382"));
console.log(factorial(5));
console.log(wordLength("Abimbola"))
console.log(splitWord("Abimbola"))

console.log(isPalindrome("racecar"));
console.log(ignoreCase("Abimbola"));