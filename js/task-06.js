const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
    const addInput = event.currentTarget;
    const inputLength = Number(addInput.dataset.length);

    if (addInput.value.length === inputLength) {
        addInput.classList.remove('invalid');
        addInput.classList.add('valid');
    } else {
        addInput.classList.remove('valid');
        addInput.classList.add('invalid');
    }
};