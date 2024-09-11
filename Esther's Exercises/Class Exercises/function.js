function UserData(id, available, count, name, author){
	this.id = Number(id);
	this.available = Boolean(available);
	this.count = Number(count);
	this.name = String(name);
	this.author = String(author)
}

let identity = "1";
let isavailable = " ";
let count = "";
let name = "Miracle";
let author = "Olasoyin";

//let user1 = new UserData(Number(identity), Boolean(isavailable), Number(count), String(name), String(author))
let user1 = new UserData(identity, isavailable, count, name, author)
console.log(user1)

console.log()

//Ternary operator(Nested)
let age = 50
age > 50 ? console.log("Number is bigger") : age < 50 ? console.log("Number is lesser") : console.log("Number is at the middle")

console.log()

//Task
function operatorsFunction(leftOperand, rightOperand, operator){
	return result = operator == "+" ? console.log(leftOperand + rightOperand):
		  operator == "-" ? console.log(rightOperand - leftOperand):
		  operator == "*" ? console.log(leftOperand * rightOperand):
		  operator == "/" ? console.log(leftOperand / rightOperand):
		  console.log(NaN)
}
let ans = operatorsFunction(2, 3, "+")













