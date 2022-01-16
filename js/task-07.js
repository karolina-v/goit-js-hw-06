const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onSpanFontChange);

function onSpanFontChange() {
    spanEl.style.fontSize = inputEl.value + 'px';
}