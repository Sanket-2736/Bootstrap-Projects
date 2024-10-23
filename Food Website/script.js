// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide
// Select all navigation links
let navbarLinks = document.querySelectorAll('.nav-link');
// Select the navbar collapse element
let navCollapse = document.querySelector('.navbar-collapse.collapse');

// Loop through each navigation link and add a click event listener
navbarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove the "show" class from the navbar collapse element
        navCollapse.classList.remove("show");
    });
});


// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    // Initialize the counters
    counter('count1', 0, 1278, 3000);
    counter('count2', 0, 130, 3000);
    counter('count3', 0, 1535, 3000);
    counter('count4', 0, 2360, 3000);
});
