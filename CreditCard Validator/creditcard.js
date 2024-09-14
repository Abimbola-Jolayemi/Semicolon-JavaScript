function checkCardLength(cardNumber){
	if(cardNumber.length >= 13 && cardNumber.length <= 16){
		return true;
	} else {
		return false;
	}
}

function addUpDigitsFromRight(cardNumber){
	let cardlength = cardNumber.length;
	let total = 0;
	for(let index = cardlength - 2; index >= 0; index -= 2){
		let indexOfCard = Number(cardNumber.charAt(index));
		let productOfIndex = indexOfCard * 2;
		if (productOfIndex >= 10){
			let digit1 = productOfIndex % 10;
			productOfIndex = Math.floor(productOfIndex / 10);

			let digit2 = productOfIndex % 10;
			productOfIndex = digit1 + digit2;
		}
		total += productOfIndex;
	}
		return total;
}

function addNumbersOnOddIndex(cardNumber){
	let total = 0;
	let cardLength = cardNumber.length;
	if(cardLength % 2 == 0){
		cardLength = cardNumber.length - 1;
	} else{
		cardLength = cardNumber.length - 2;
	}

	for(let index = cardLength; index >= 0; index-= 2){
		total += Number(cardNumber.charAt(index))
	}

	return total;
}

function checkCardValidity(cardNumber){
	let sumOfNumbersFromRightToLeft = addUpDigitsFromRight(cardNumber);
	let sumOfNumbersOnOddDigits = addNumbersOnOddIndex(cardNumber);
	let validityCheck = sumOfNumbersFromRightToLeft + sumOfNumbersOnOddDigits;

	if(validityCheck % 10 == 0){
		return true;
	} else{
		return false;
	}
}

function isCardTypeValid(cardNumber){
	if(cardNumber.charAt(0) == '4' || cardNumber.charAt(0) == '5' || cardNumber.charAt(0) == '6' || cardNumber.charAt(0) == '3' && cardNumber.charAt(1) == '7'){
		return true;
	} else {
		return false;
	}
}

function isCardNumberDigit(cardNumber){
	let count = 0;
	for(let index in cardNumber){
		if(isNaN(cardNumber[index])){
			continue;
		}
		count++;
	}
	if(count == cardNumber.length){
		return true;
	} else{
		return false;
	}
}

function cardValidity(cardNumber){
	if(cardNumber.charAt(0) == '4'){
		return "Visacard";
	} else if (cardNumber.charAt(0) == '5'){
		return "MasterCard";
	} else if (cardNumber.charAt(0) == '3' && cardNumber.charAt(1) == '7'){
		return "American Express Card";
	} else if(cardNumber.charAt(0) == '6'){
		return "Discover cards";
	} else {
		return "invalid card";
	}
}

function validateCard(cardNumber){
	if(checkCardLength(cardNumber) == false || checkCardValidity(cardNumber) == false || isCardTypeValid(cardNumber) == false || isCardNumberDigit(cardNumber) == false){
		return "Invalid Card number"
	} else{
		return "********************************" + "\nCard length: " + cardNumber.length + "\nCard name: " + cardValidity(cardNumber) + "\nCard Number: " + cardNumber + "\nCard validity status: " + checkCardValidity(cardNumber) + "\n********************************";
	}
}

module.exports = {checkCardLength, addUpDigitsFromRight, addNumbersOnOddIndex, checkCardValidity, cardValidity, isCardNumberDigit};