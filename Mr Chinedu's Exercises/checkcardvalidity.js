function isCardIndexZero(cardNumber){
	if (cardNumber.charAt(0) == 4 || cardNumber.charAt(0) == 5 || cardNumber.charAt(0) == 6){
		return true;
	} else {
		return false;
	}
}

function isCardNumberDigits(cardNumber){
	let count = 0;

	for(let index = 0; index < cardNumber.length; index++){
		if(isNaN(cardNumber[index])){
			continue;
		}
		count++;		
	}

	if(count == 16){
		return true;
	} else{
		return false;
	}
}

function checkCardValidity(cardNumber){
	if(isCardIndexZero(cardNumber) == true && isCardNumberDigits(cardNumber) == true){
		return true;
	} else {
		return false;
	}
}

console.log(checkCardValidity("4534-5678-0A10-2345"));