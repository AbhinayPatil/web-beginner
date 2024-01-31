let hamburger = document.querySelector("#hamburger .icon");
let mobileMenu = document.querySelector(".menu-mobile");
let closeBtn = document.querySelector("#close");

let displayMenu = ()=>{
    mobileMenu.style.display = "flex";
}
let closeMenu = ()=>{
    mobileMenu.style.display = "none";
}

closeBtn.addEventListener("click",closeMenu);
hamburger.addEventListener("click",displayMenu);