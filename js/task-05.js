const refs = {
    input: document.querySelector('input'),
    nameLabel: document.querySelector('h1 > span'),
    helloName: document.querySelector('h1'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        refs.nameLabel.textContent = 'Anonymous';
    }
}