// Función para generar una contraseña aleatoria
function generatePassword(length, includeNumbers, includeSymbols) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_+=~';

    let validChars = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    return password;
}

// Obtener referencias a los elementos del DOM
const inputLength = document.getElementById('inputLength');
const checkboxNumeros = document.getElementById('checkboxNumeros');
const checkboxSimbolos = document.getElementById('checkboxSimbolos');
const button = document.getElementById('button');
const generatedPassword = document.getElementById('generatedPassword');

// Event listener para el botón de generar contraseña
button.addEventListener('click', function() {
    const length = parseInt(inputLength.value);
    const includeNumbers = checkboxNumeros.checked;
    const includeSymbols = checkboxSimbolos.checked;

    const password = generatePassword(length, includeNumbers, includeSymbols);

    generatedPassword.textContent = password;
});
