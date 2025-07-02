const navbarBtn = document.getElementById("navbar-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

navbarBtn.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("top-24")
})