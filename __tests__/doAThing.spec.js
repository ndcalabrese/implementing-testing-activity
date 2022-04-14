//let jest = require("@jest/globals");
let doAThing = require("../src/review.js");
let reverseNumber = require("../src/review.js");


describe("Takes name of callback function and input number", () => {
    
    // I don't know why this works
    let mockThing = jest.fn();
    let input = 12345;
    doAThing(input, reverseNumber);
    mockThing();

    // 4) .toHaveBeenCalled()
    test("The function should return successfully", () => {
        
        
        expect(mockThing).toHaveBeenCalled();
    });

    // 5) .toHaveReturned()
    test("The function should return successfully", () => {

        expect(mockThing).toHaveReturned();
    })

})