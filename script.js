
let scrollButton = document.querySelector('.header__button');
let hiddenElement = document.querySelector('.section__landing');

let buttonClick = () => {
    hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

scrollButton.addEventListener('click', buttonClick);



