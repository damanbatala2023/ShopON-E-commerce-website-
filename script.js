const header = document.querySelector("header");
const menu = document.querySelector(".fa-bars");
const navList = document.querySelector(".nav-list");


window.onscroll = ()=>{
    if(window.scrollY > 100){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}

menu.addEventListener("click", ()=>  {
    navList.classList.toggle('active');
   menu.classList.toggle('fa-xmark');
})