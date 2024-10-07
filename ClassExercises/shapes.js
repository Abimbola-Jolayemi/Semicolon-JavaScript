class Shapes{
    #name = "";
    constructor(side1, side2){
        this.side1 = side1;
        this.side2 = side2;
    }

    getName(){
        return this.#name;
    }
}

class Rectangle extends Shapes{
    constructor(side1, side2){
        super(side1, side2);
    }

    calculateArea(){
        return this.side1 * this.side2;
    }

    isSquarish(){
        return this.side1 === this.side2;
    }
}

module.exports = Rectangle