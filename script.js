const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/*hamburger bars will be clickable*/
hamburger.addEventListener("click", () => {
    /*Instructs hamburger bars to activate on click (activate = turn to x and show menu)*/
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/*Ensures that menu disappears when a link has been clicked */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))