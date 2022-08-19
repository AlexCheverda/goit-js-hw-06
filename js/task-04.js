let counterValue = 0;
const incrBtn = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};

const decrBtn = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};

document.querySelector("[data-action='increment']")
  .addEventListener('click', incrBtn);

document.querySelector("[data-action='decrement']")
  .addEventListener('click', decrBtn);