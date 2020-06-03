const { add } = require("../util/util.js");

describe("Add", () => {

    describe("Success", () => {
        it("should return the sum of the 2 passed arguments", () => {
            //toBe talks about a return value
            expect(add(2,2)).toBe(4);
        });
    });
    
});