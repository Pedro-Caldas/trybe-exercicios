const {encode, decode} = require('./encodeDecode')

describe('encode and decode', () => {

    it('Test if encode is a function', () => {
        expect(typeof encode).toBe('function')
    })

    it('Test if decode is a function', () => {
        expect(typeof decode).toBe('function')
    })

    it('Test if encode is correctly converting vowels into numbers', () => {
        expect(encode('a', 'e', 'i', 'o', 'u')).toMatch('1', '2', '3', '4', '5')
    })

    it('Test if decode is correctly converting numbers into vowels', () => {
        expect(decode('1', '2', '3', '4', '5')).toMatch('a', 'e', 'i', 'o', 'u')
    })

    it('Test if encode is not converting other letters into numbers', () => {
        expect(encode('b')).toBe(false)
    })

    it('Test if decode is not converting number into other letters', () => {
        expect(decode('6')).toBe(false)
    })

})