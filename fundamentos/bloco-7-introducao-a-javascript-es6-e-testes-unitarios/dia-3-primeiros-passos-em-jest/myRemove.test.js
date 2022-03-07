const myRemove = require('./myRemove')

describe('myRemove', () => {

    it('test if returns the expected array', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
    })
    
    it('test if dont returns the unexpected array', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
    })

    it('test if returns the expected array with number not declared', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
    })

})