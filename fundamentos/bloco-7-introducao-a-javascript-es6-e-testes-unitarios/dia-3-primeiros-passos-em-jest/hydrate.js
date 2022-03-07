function hydrate(str) {
    let integers = str.match(/\d+/g);
    let coposDagua = 0;
    for (let i in integers) {
      coposDagua += parseInt(integers[i]);
    }
    if (coposDagua == 1) {
      return (coposDagua.toString() + " copo de água");
    } else {
      return (coposDagua.toString() + " copos de água");
    }
  }

  module.exports = hydrate