let circles = document.querySelector(".circle");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 700) {
        circles.classList.add("active");
    } else {
        circles.classList.remove("active");

    }
})

circles.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,
        // behavior: "smooth"

    })
});

let customNav = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        customNav.style.position = "fixed";
        customNav.style.right = "0";
        customNav.style.left = "0";
        customNav.style.backgroundColor = "#fff"
        customNav.style.zIndex = "10"

        // customNav.style.transition = "all 0.3s linear"
        customNav.classList.add("active");



    } else {
        customNav.style.position = "relative";
        customNav.style.transition = "all 0.3s linear"
        customNav.classList.remove("active");



    }
})

// let board = document.getElementById("custom-board");
// let boardNavigation = document.querySelector(".board-navigation");
// let boarda = document.querySelector(".boarda");
// board.addEventListener("click", (e) => {
//     e.preventDefault();
//     boardNavigation.classList.toggle("active")
//     boarda.style.right = "0px"
// })

// ******* jQuery start here *******

$(document).ready(function() {
    $('.said-body').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        }
        // nav: true,

    });
});

// ******* jQuery end here *******