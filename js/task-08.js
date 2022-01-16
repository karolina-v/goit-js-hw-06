const formEl = document.querySelector('.login-form');

const inputMailEl = document.querySelector(`[type='email']`);
const inputPasswEl = document.querySelector(`[type='password']`);

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit (event) {
    event.preventDefault();

    if (inputMailEl.value === '' || inputPasswEl.value === '') {
        alert('Все поля должны быть заполнены!!!');
    }
    
    const allValues = event.currentTarget.elements;
    const email = allValues.email.value;
    const password = allValues.password.value;

    const formData = {
        email, password,
    };

    console.log(formData);

    formEl.reset();

}