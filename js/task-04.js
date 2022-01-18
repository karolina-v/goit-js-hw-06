const valueEl = document.querySelector('#value');
const decrBtnEl = valueEl.previousElementSibling;
const incrBtnEl = valueEl.nextElementSibling;

decrBtnEl.addEventListener('click', onTargetDecrBtnClick);
incrBtnEl.addEventListener('click', onTargetIncrBtnClick);


let counterValue = Number(valueEl.textContent);
// let counterValue = 0;

function onTargetDecrBtnClick () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onTargetIncrBtnClick () {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

