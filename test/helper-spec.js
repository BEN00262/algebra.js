gcd = require('../src/helper').gcd;
lcm = require('../src/helper').lcm;
isInt = require('../src/helper').isInt;

describe("Greatest common divisor", function() {
    it("returns 1 when the arguments are 1 and 1", function() {
        var g = gcd(1, 1);
        expect(g).toEqual(1);
    });

    it("returns 2 when the arguments are 2 and 4", function() {
        var g = gcd(2, 4);
        expect(g).toEqual(2);
    });

    it("returns 1 when the arguments are 5 and 7", function() {
        var g = gcd(5, 7);
        expect(g).toEqual(1);
    })
});

describe("Least common multiple", function() {
    it("should return 12 if the arguments are 4 and 6", function() {
        expect(lcm(4, 6)).toEqual(12);
    });

    it("should return 15 if the arguments are 3 and 5", function() {
        expect(lcm(3, 5)).toEqual(15);
    });
});

describe("isInt", function() {
    it("should return false if it's a float", function() {
        expect(isInt(.5)).toBe(false);
    });

    it("should return false if it's a string", function() {
        expect(isInt("hi")).toBe(false);
    });

    it("should return false if it's undefined", function() {
        expect(isInt()).toBe(false);
    });

    it("should return true if it's an integer", function() {
        expect(isInt(4)).toBe(true);
    });
});