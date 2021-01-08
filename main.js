function navSlide(){
    const burger = document.querySelector('#burger');
    const mobile_nav = document.querySelector('.mobile-nav-list');
    const nav_bar = document.querySelector(".nav-bar");

    burger.addEventListener('click', () =>{
        mobile_nav.classList.toggle('mobile-nav-list-active');
        nav_bar.classList.toggle('nav-bar-active');
    });
}

navSlide();