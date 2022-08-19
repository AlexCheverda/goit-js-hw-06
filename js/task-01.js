const categoryElements = document.querySelectorAll('li.item');
console.log(`Number of categories:`, categoryElements.length);

categoryElements.forEach(function (categories) {
    console.log('Category:', categories.firstElementChild.textContent);
    console.log('Elements:', categories.lastElementChild.children.length);
});