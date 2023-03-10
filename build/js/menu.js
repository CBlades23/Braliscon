const navegacionToggle = document.querySelector(".navegacion__toggle");
const navegacionMenu = document.querySelector(".navegacion__menu");

navegacionToggle.addEventListener("click", () => {
    navegacionMenu.classList.toggle("navegacion__menu__visible");
});