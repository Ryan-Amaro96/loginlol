const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.entrar');

function handleChange() {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.settAttribute('disabled');
    }
}

inputs.forEach(function (input) {
    inputs.addEventListener('input', handleChange)
})