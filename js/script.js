const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        item.classList.toggle('active');

        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});


function toggleMenu() {
    const menu = document.querySelector('.burger-menu__nav');
    const burgerButton = document.querySelector('.burger-menu__button');

    menu.classList.toggle('active');

    // Меняем значок между бургером и крестиком
    if (menu.classList.contains('active')) {
        burgerButton.textContent = '✖';
    } else {
        burgerButton.textContent = '☰';
    }
}

