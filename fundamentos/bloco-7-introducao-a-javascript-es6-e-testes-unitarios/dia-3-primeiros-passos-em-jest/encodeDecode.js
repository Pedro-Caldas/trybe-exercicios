function encode(string) {
    let splitString = string.split('');
    console.log(splitString)
    for (let i in splitString) {
      if (splitString[i] === 'a') {
        splitString[i] = '1'
      } else if (splitString[i] === 'e') {
        splitString[i] = '2'
      } else if (splitString[i] === 'i') {
        splitString[i] = '3'
      } else if (splitString[i] === 'o') {
        splitString[i] = '4'
      } else if (splitString[i] === 'u') {
        splitString[i] = '5'
      } else {
          return false
      }
    }
    let resultado = splitString.join('');
    return resultado
  }
  
  function decode(string) {
    let splitString = string.split('');
    console.log(splitString)
    for (let i in splitString) {
      if (splitString[i] === '1') {
        splitString[i] = 'a'
      } else if (splitString[i] === '2') {
        splitString[i] = 'e'
      } else if (splitString[i] === '3') {
        splitString[i] = 'i'
      } else if (splitString[i] === '4') {
        splitString[i] = 'o'
      } else if (splitString[i] === '5') {
        splitString[i] = 'u'
      } else {
          return false
      }
    }
    let resultado = splitString.join('');
    return resultado
  }

  module.exports = {encode, decode}