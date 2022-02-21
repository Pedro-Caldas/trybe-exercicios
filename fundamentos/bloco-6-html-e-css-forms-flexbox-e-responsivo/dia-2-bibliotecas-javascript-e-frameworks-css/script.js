let submitBtn = document.getElementById('submit-btn');
let photosCheck = document.getElementById('fotos-checkbox');
let nameInput = document.getElementById('name-input');
let emailInput = document.getElementById('email-input');

submitBtn.addEventListener('click', event => {
    if (photosCheck = false) {
    event.preventDefault();
    }
    
    if (nameInput.value.length < 10 || emailInput.value.length < 10) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
    }
})

