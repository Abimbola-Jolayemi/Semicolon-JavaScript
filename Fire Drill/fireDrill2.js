//Question 1

const book = {
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		yearPublished: '1925'
	}

	const{title, author} = book;
	detail = title + " by " + author;
console.log(detail);

// Question 2
function displayKeyAndValue(objectPair) {
	let key_value_pair = "";
	for (let key in objectPair) {
		key_value_pair += key + ":" + objectPair[key]+ "\n";
	}
	return key_value_pair;
}

const car = {
		make: 'Toyota',
		model: 'Camry',
		year: 2021	
	}

console.log(displayKeyAndValue(car));

//Question 3
const counter = {
	count: 0,
	step: 1,
	increment: function(){
		this.count += this.step;
		return this.count;
	},
	decrement: function(){
		this.count -= this.step;
		return this.count;
	}
};

counter.increment()
console.log(counter.count);
counter.increment()
console.log(counter.count);
counter.increment()
console.log(counter.count);


//Question 4

const person1 = {
		firstName: "Abimbola",
		lastName: "Jolayemi",
		fullName: function(){
				return this.firstName + " " + this.lastName
			}
	}

console.log(person1.fullName());


//Question5
const person2 = {
		FirstName: "Abimbola",
		LastName: "Jolayemi",
		Age: 17,
	}

function StringOfPersonObject(objectPair){
	let counter = 0;
	let new_string = "";
	for(let key_value_pair in objectPair){
		new_string += key_value_pair + ": " + objectPair[key_value_pair];
		counter += 1;
		if(counter != 3){
			new_string += ", ";
		}
	}
	return `"${new_string}"`;
}

console.log(StringOfPersonObject(person2));