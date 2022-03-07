const sum = require('./sum')

describe('function sum', () => {
    
    it('test if 4 and 5 returns 9', () => {
        expect(sum(4, 5)).toEqual(9);
    })

    it('test if 0 and 0 returns 0', () => {
        expect(sum(0, 0)).toEqual(0);
    })

    it('test if sum throws error with string in place of number', () => {
        expect(() => {sum(4, "5")}).toThrow();
    })

    it("test if error message is 'parameters must be numbers", () => {
        expect(() => {sum(4, "5")}).toThrowError(new Error("parameters must be numbers"))
    })

})