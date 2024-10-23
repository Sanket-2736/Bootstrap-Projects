let nav = document.querySelector('.navbar');
window.onscroll = function(){
    if (nav) {
        if(document.documentElement.scrollTop > 50){
            nav.classList.add('header-scrolled');
        } else{
            nav.classList.remove('header-scrolled');
        }
    }
}

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

if (navCollapse) {
    navBar.forEach(function(a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
        });
    });
}

// swiper slider 
if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
        direction : "vertical",
        loop : true,
        pagination : {
            el: ".swiper-pagination", 
            clickable : true,
        },
        autoplay : {
            delay : 3500,
        },
    });
} else {
    console.error("Swiper is not defined. Make sure to include the Swiper.js library.");
}

// counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if (!obj) {
            console.error(`Element with ID ${id} not found.`);
            return;
        }
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 1257, 3000);
    counter("count2", 0, 500, 3000);
    counter("count3", 0, 734, 5000);
    counter("count4", 0, 3647, 6000);
});


var swiper = new Swiper(".our-partner", {
    slidesPerView: 5, 
    spaceBetween: 30, 
    loop: true,
    autoplay: {
        delay:2000,
    },
    breakpoints : {
        '991' : {
            slidesPerView: 5, 
            spaceBetween: 10, 
        },
        '767' : {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        '320' : {
            slidesPerView: 2, 
            spaceBetween: 8, 
        },
    },
})