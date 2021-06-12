window.addEventListener("scroll",function(){
    
    let navbar = document.querySelector(".sidevarWraper");

    navbar.classList.toggle("sticky",window.scrollY > 25)
})