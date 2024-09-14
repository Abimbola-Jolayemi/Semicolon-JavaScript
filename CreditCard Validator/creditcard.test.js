const{checkCardLength, addUpDigitsFromRight, addNumbersOnOddIndex, checkCardValidity, cardValidity, isCardNumberDigit} = require("./creditcard.js");

test("check for card length", ()=>{
	let cardNumber = "4388576018402626";
	let result = checkCardLength(cardNumber);
	expect(result).toBe(true);

	cardNumber = "438801840262";
	result = checkCardLength(cardNumber);
	expect(result).toBe(false);
})

test("double digits from the right of card number", ()=>{
	let cardNumber = "4388576018402626";
	let result = addUpDigitsFromRight(cardNumber);
	expect(result).toBe(37);
})

test("add up on odd indices", ()=>{
	let cardNumber = "4388576018402626";
	let result = addNumbersOnOddIndex(cardNumber);
	expect(result).toBe(38);
})

test("check card validity", ()=>{
	let cardNumber = "4388576018402626";
	let result = checkCardValidity(cardNumber);
	expect(result).toBe(false);

	cardNumber = "4388576018410707";
	result = checkCardValidity(cardNumber);
	expect(result).toBe(true);
})

test("check card type validity", ()=>{
	let cardNumber = "5399831619690403";
	let result = cardValidity(cardNumber);
	expect(result).toBe("MasterCard");
})

test("check if card number contain digits only", ()=>{
	let cardNumber = "5399831619690403";
	let result = isCardNumberDigit(cardNumber);
	expect(result).toBe(true);

	cardNumber = "5399B31619690403"
	result = isCardNumberDigit(cardNumber);
	expect(result).toBe(false);
})


