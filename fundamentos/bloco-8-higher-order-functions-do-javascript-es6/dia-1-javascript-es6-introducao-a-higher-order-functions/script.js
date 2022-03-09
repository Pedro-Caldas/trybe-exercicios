// Ex. 1

const completeName = (name) => {
    const nameUnderscored = name.replace(' ', '_').toLowerCase();
    const obj = {
        nomeCompleto: name,
        email: `${nameUnderscored}@trybe.com`
    }
    return obj
}

console.log(completeName('Pedro Caldas'))

const newEmployees = () => {
    const employees = {
      id1: completeName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: completeName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: completeName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees())