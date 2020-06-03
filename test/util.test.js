const { add, minus } = require("../util/util.js");

describe("Add", () => {

    describe("Success", () => {
        it("should return the sum of the 2 passed arguments", () => {
            //toBe talks about a return value
            expect(add(2,2)).toBe(4);
        });
    });

    describe("Failure", () => {
        it("should throw an error if first argument isn't a number", () => {
            expect(() => add("2", 2)).toThrowError();
        });

        it("should throw an error if second argument isn't a number", () => {
            expect(() => add(2, "2")).toThrowError();
        });

        it("should throw an error if no arguments were received", () => {
            expect(() => add()).toThrowError();
        });
    });

});

describe("Minus", () => {

    describe("Success", () => {
        it("should return the difference of the 2 passed arguments", () => {
            //toBe talks about a return value
            expect(minus(4,2)).toBe(2);
        });
    });

    describe("Failure", () => {
        it("should throw an error if first argument isn't a number", () => {
            expect(() => minus("2", 2)).toThrowError();
        });

        it("should throw an error if second argument isn't a number", () => {
            expect(() => minus(2, "2")).toThrowError();
        });

        it("should throw an error if no arguments were received", () => {
            expect(() => minus()).toThrowError();
        });
    });

});