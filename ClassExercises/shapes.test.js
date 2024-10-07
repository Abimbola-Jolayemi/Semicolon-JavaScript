const Rectangle = require("./shapes")

test("test that shapes can be calculate the area of a rectangle", ()=>{
    let rectangle = new Rectangle(5, 10);
    let result = rectangle.calculateArea();
    expect(result).toBe(50);
})

test("test that shows if a rectangle is squarish", ()=>{
    let rectangle = new Rectangle(5, 6);
    let result = rectangle.isSquarish();
    expect(result).toBe(false);

    rectangle = new Rectangle(5, 5);
    result = rectangle.isSquarish();
    expect(result).toBe(true);
});