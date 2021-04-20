const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('#closeMenu');
const openMenu = document.querySelector('#openMenu');

openMenu.addEventListener('click', showMenuFunc);
closeMenu.addEventListener('click', closeMenuFunc);

function showMenuFunc() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
}

function closeMenuFunc() {
        mainMenu.style.top = '100%';
}