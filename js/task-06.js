const inputEl = document.querySelector('#validation-input');
const totalLenght = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur() {
    if (inputEl.value.length === totalLenght){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
         inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}




