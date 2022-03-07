const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz tests', () => {

    it("test if divisible by 3 and 5 returns 'fizzbuzz'", () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    })

    it("test if divisible by 3 returns 'fizz'", () => {
        expect(myFizzBuzz(9)).toMatch('fizz');
    })

    it("test if divisible by 5 returns 'buzz'", () => {
        expect(myFizzBuzz(10)).toMatch('buzz');
    })

    it("test if not divisible by 3 and 5 returns same number", () => {
        expect(myFizzBuzz(2)).toBe(2);
    })

    it("test if not a number returns false", () => {
        expect(myFizzBuzz('a')).toBe(false);
    })

})