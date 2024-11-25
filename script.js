const openBtn=document.getElementById("openBtn");
const closeBtn=document.getElementById("closeBtn");
const navMenu=document.querySelector(".nav__menu");


function openMobileNav(){
    navMenu.classList.add("opened");
}
function closeMobileNav(){
    navMenu.classList.remove("opened");
}
openBtn.addEventListener("click",openMobileNav);
closeBtn.addEventListener("click",closeMobileNav);