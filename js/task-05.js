const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');


inputEl.addEventListener('input', onInputChange);


// function onInputChange(event) {
//     if (event.currentTarget.value !== '') {
//         nameEl.textContent = event.currentTarget.value;
//     } else {
//         nameEl.textContent = 'Anonymous';
//     }
// }


function onInputChange(event) {
    (event.currentTarget.value !== '') ? nameEl.textContent = event.currentTarget.value :  nameEl.textContent = 'Anonymous';
}




