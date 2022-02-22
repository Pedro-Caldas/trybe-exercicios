// let submitBtn = document.getElementById('submit-btn');
// let photosCheck = document.getElementById('fotos-checkbox');
// let nameInput = document.getElementById('name-input');
// let emailInput = document.getElementById('email-input');

// Commenting to test Just-Validate features

// submitBtn.addEventListener('click', event => {
//     if (photosCheck = false) {
//     event.preventDefault();
//     }
    
//     if (nameInput.value.length < 10 || emailInput.value.length < 10) {
//         alert('Dados Inválidos');
//     } else {
//         alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
//     }

    
// })


const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form');

validation.addField('#name-input', [
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 40,
    }
]);
validation.addField('#email-input', [
    {
        rule: 'required',
        errorMessage: 'Email is required',
    },
    {
        rule: 'email',
        errorMessage: 'Email is invalid!',
    },
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 50,
    }
])
.addField('#razao-texto', [
    {
        rule: 'maxLength',
        value: 500,
    }
]);