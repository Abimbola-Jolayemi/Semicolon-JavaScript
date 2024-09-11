function Model(name, population, temp, currency){
	this.name = String(name);
	this.population = Number(population);
	this.temp = Number(temp);
	this.currency = String(currency)
}

let model1 = new Model("Sydney", "1250000", "28", "EUD");
let model2 = new Model("Lagos", "8000000", "37.5", "NGN");
let model3 = new Model("California", "9000000", "35.5", "USD");
let model4 = new Model("Accra", "3000000", "36", "EUD");
let model5 = new Model("Abuja", "4500000", "37.8", "NGN");
let model6 = new Model("Lagos", "8000000", "37.5", "NGN");
let model7 = new Model("Washington", "9000000", "35.5", "USD");
let model8 = new Model("Cross-river", "800000", "37.2", "NGN");


let arrayOfModels = {model1, model2, model3, model4, model5, model6, model7, model8}
let result = arraySlice(arrayOfModels, 1, 0, 2);
	console.log(result);


function arraySlice(array, row, columnStart, columnEnd){
	let slicedArray = []

	for(let index = 0; index < columnEnd - columnStart + 1; index++){
		slicedArray[index] = array[row][columnStart + index];
	}
	return slicedArray;
}