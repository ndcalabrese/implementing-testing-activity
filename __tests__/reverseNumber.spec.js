let reverseNumber = require("../src/review.js");


describe("Display number in reverse function", () => {
    
    // 1) .toEqual()
    test("The output should equal the reverse of the input", () => {
        
        const input = 12345;
        const output = "54321";
        expect(reverseNumber(input)).toEqual(output);
        
    });

    // 2) .toHaveLength()
    test("The output should be the same length as the input", () => {

        const input = 12345;
        inputLength = input.toString().length
        expect(reverseNumber(input)).toHaveLength(inputLength);

    });

    // 3) .toBeTruthy()
    test("The output should be truthy", () => {

        const input = 12345;
        expect(reverseNumber(input)).toBeTruthy();

    });


})