// PART 2

// Ex. 1 and 2

// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };

//   const customerInfo = (order) => {
//     const messageToDelivery = `Olá, ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address['street']}, Nº: ${order.address['number']}, AP: ${order.address['apartment']}`;
//     console.log(messageToDelivery);
//   }

//   customerInfo(order);

//   const orderModifier = (order) => {
//     order.name = 'Luiz Silva';
//     order.payment = '50';
//     const pizzas = Object.keys(order.order.pizza);
//     const drinks = order.order.drinks.coke.type;

//     const messageOrderModified = `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$${order.payment},00.`
//     console.log(messageOrderModified)
//   }

//   orderModifier(order);



// PART 3

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Ex. 1

function addNewKey(objt, key, value) {
    objt[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');

// Ex. 2

function listKeys(objt) {
    objtKeys = Object.keys(objt);
    return objtKeys;
}

// Ex. 3

function objtLength(objt) {
    objtKeys = Object.keys(objt);
    return objtKeys.length;
}

// Ex. 4

function listValues(objt) {
    objtValues = Object.values(objt);
    return objtValues;
}

// Ex. 5

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Ex. 6

function numberOfStudents(lessons) {
    let total = 0;
    const keyArray = Object.keys(lessons);
    for (let i = 0; i < keyArray.length; i += 1) {
        total += lessons[keyArray[i]].numeroEstudantes;
    }
    return total
}

// Ex. 7

function valueByIndex(obj, index) {
    let valueOfKey;
    const keyArray = Object.keys(obj);
    for (let i = 0; i < keyArray.length; i += 1) {
        if (i == index) {
            valueOfKey = Object.values(obj)[i];
        }
    }
    return valueOfKey;
}

// Ex. 8

function verifyKeyValue(obj, key, value) {
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    let isTrue = false;
    for (let i = 0; i < objKeys.length; i += 1) {
        if (key == objKeys[i] && value == objValues[i]) {
            isTrue = true;
        }
    }
    return isTrue;
}