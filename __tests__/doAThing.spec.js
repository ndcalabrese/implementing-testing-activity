//let jest = require("@jest/globals");
let doAThing = require("../src/review.js");


describe("Takes name of callback function and input number", () => {
    
    // 5) .toHaveBeenCalled()
    test("The function should return successfully", () => {
        const input = 12345;
        const mockFunction = jest.fn((input) => input+2);
        
        doAThing(input, mockFunction)
        
        expect(mockFunction).toHaveBeenCalled();
    });

    // 5) .toHaveReturned()
    test("The function should return successfully", () => {
        const input = 12345;
        const mockFunction = jest.fn((input) => input+2);
        
        doAThing(input, mockFunction)
        
        expect(mockFunction).toHaveReturned();
    });

})