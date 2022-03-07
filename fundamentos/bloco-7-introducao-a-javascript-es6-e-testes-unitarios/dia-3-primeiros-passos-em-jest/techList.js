const techList = (array, string) => {
    if (array.length === 0) {
        return 'Vazio!'
    }
    let sortedArray = array.sort();
    const listOfTechs = [];
    for (let i in sortedArray) {
        listOfTechs.push({
            'tech': array[i],
            'name': string,
        })
    }
    return listOfTechs
}



module.exports = techList;