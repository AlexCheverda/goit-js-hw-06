// Задание 10
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр -
// число.
// Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesBlock = document.querySelector('#boxes');
const refs = {
  id: document.querySelector('#controls'),
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
}

refs.buttonCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = refs.input.value;

  const width = 30;
  const height = 30;
  let addValue = 0
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = width + addValue + 'px';
    box.style.height = height + addValue + 'px';
    box.style.backgroundColor = getRandomHexColor();
    addValue += 10;
    boxes.push(box);
  }
  boxesBlock.append(...boxes);
}

refs.buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesBlock.innerHTML = "";
}